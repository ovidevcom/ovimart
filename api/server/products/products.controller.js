const Elastic = require('../utils/esclient')
const Product = require('./products.model')
const Category = require('../categories/categories.model')
const Brand = require('../brands/brands.model')
/**
 * Find and load a product to req
 */
function load (req, res, next, id) {
  Product
    .get(id)
    .then(product => {
      req.product = product // eslint-disable-line no-param-reassign
      return next()
    })
    .catch(e => next(e))
}

/**
  * Gets a product
  * @returns {Product}
  */
function get (req, res) {
  return res.json({ product: req.product })
}

/**
  * Searchs a product
  * @param {String} red.query.str - Search string, name, sku, attribute's name
  * @returns {Product}
  */
async function search (req, res, next) {
  try {
    const { str } = req.query

    const response = await Elastic.client().search({
      index: 'products',
      body: {
        suggest: {
          product_suggest: {
            prefix: str,
            completion: {
              field: 'product_suggest'
            }
          }
        }
      }
    })

    const { product_suggest } = response.suggest
    // since we transform data for elastic search, id collision
    // transform data back to mongodb schema
    // filter 0 quantity out
    const products = product_suggest[0].options.map(c => {
      const { name, quantity, thumbnail, ...rest } = c['_source']
      return { name: name.join(' '), quantity, thumbnail, variant: rest }
    })

    return res.json({ products })
  } catch (err) {
    next(err)
  }
}

/**
 * Gets a list of products.
 * @property {number} req.query.page - Number of products to be skipped.
 * @property {number} req.query.limit - Limit number of products to be returned.
 * @property {number} req.query.count - Whether to return total of products or not.
 * @property {String} req.query.brand - Search product by brand
 * @property {String} req.query.category - Search product by category
 * @property {String} req.query.sku - Search product by sku
 * @returns {Product[]} || {Product[], Number}
 */
async function list (req, res, next) {
  const { limit = 0, page = 0, count = false, sku, brand, category } = req.query

  try {
    const products = await Product.list(+page, +limit, sku, brand, category)

    if (count) {
      const total = await Product.total()

      res.json({ products, total })
    } else {
      res.json({ products })
    }
  } catch (err) {
    next(err)
  }
}

/**
 * Adds a new product
 * @param {String} req.body.name
 * @param {Boolean} req.body.sell_on_pos
 * @param {Number} req.body.quantity
 * @param {String} req.body.thumbnail
 * @param {[String]} req.body.images
 * @param {String} req.body.description
 * @param {Object} req.body.variants
 * @param {Object} req.body.variantKVs
 * @param {ObjectId} req.body.brand_id
 * @param {ObjectId} req.body.category_ids
 * @returns {Product}
 */
function add (req, res, next) {
  const {
    name, quantity, description, sell_on_pos, thumbnail, images,
    category_ids, brand_id, variants, variantKVs
  } = req.body

  Brand.findByIdAndUpdate(brand_id, { $inc: { product_count: 1 } }).exec()

  category_ids.forEach(category_id => {
    Category.findByIdAndUpdate(category_id, { $inc: { product_count: 1 } }).exec()
  })

  const product = new Product({
    name,
    slug: name.toLowerCase().replace(/ /g, '-'),
    quantity,
    description,
    thumbnail,
    images,
    sell_on_pos,
    category_ids,
    brand_id,
    variants,
    variantKVs
  })

  product
    .save()
    .then(product => res.json({ product }))
    .catch(e => next(e))
}
/**
 * Updates a product
 * @param {String} req.body.name
 * @param {String} req.body.sku
 * @param {Boolean} req.body.sell_on_pos
 * @param {Number} req.body.price
 * @param {Number} req.body.quantity
 * @param {String} req.body.thumbnail
 * @param {[String]} req.body.images
 * @param {String} req.body.description
 * @param {Object} req.body.variants
 * @param {Object} req.body.variantKVs
 * @param {ObjectId} req.body.brand_id
 * @param {ObjectId} req.body.category_ids
 * @returns status code 200
 */
function edit (req, res, next) {
  const {
    product,
    body: { name, quantity, description, sell_on_pos, thumbnail, images,
      category_ids, brand_id, variants, variantKVs, status_code }
  } = req

  if (brand_id !== product.brand_id) {
    // user changes to new brand_id
    // so decrement old brand's product_count
    Brand.findByIdAndUpdate(product.brand_id, { $inc: { product_count: -1 } }).exec()
    // and increment new brand's product_count
    Brand.findByIdAndUpdate(brand_id, { $inc: { product_count: 1 } }).exec()
  }

  product.category_ids.forEach(category_id => {
    const index = category_ids.findIndex(id => id === category_id)

    if (index < 0) {
      // decrement old category's product_count
      // since old category is not found in new categories
      Category.findByIdAndUpdate(category_id, { $inc: { product_count: -1 } }).exec()
    } else {
      // old one still in the list,
      // no need to check for it again
      category_ids.splice(index, 1)
    }
  })

  // update product_count of new category
  category_ids.forEach(category_id => {
    Category.findByIdAndUpdate(category_id, { $inc: { product_count: 1 } }).exec()
  })

  product.set({
    name,
    slug: name.toLowerCase().replace(/ /g, '-'),
    quantity,
    description,
    thumbnail,
    images,
    sell_on_pos,
    category_ids,
    brand_id,
    variants,
    variantKVs,
    status_code
  })

  product
    .save()
    .then(_ => res.sendStatus(200))
    .catch(e => next(e))
}

/**
 * Deletes a product
 * @returns status code 200
 */
function remove (req, res, next) {
  const product = req.product
  // decrement product_count of brands and categories
  Brand.findByIdAndUpdate(product.brand_id, { $inc: { product_count: -1 } }).exec()

  product.category_ids.forEach(category_id => {
    Category.findByIdAndUpdate(category_id, { $inc: { product_count: -1 } }).exec()
  })

  product
    .remove()
    .then(_ => res.sendStatus(200))
    .catch(e => next(e))
}

/**
 * Upload image - Receive req.file from multer
 * @returns {Object} { file: { name: origin file name, url: image url } }
 */
function upload (req, res) {
  if (!req.file) return res.sendStatus(400)

  const { originalname, filename } = req.file
  return res.json({ file: { name: originalname, url: `http://localhost:4040/uploads/${filename}` } })
}

module.exports = {
  load,
  get,
  search,
  list,
  add,
  edit,
  remove,
  upload
}
