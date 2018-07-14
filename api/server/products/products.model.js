const Promise = require('bluebird')
const mongoose = require('mongoose')
const httpStatus = require('http-status')
const APIError = require('../helpers/APIError')

const { ObjectId, Mixed } = mongoose.SchemaTypes

const ProductSchema = new mongoose.Schema({
  name: String,
  slug: String,
  sell_on_pos: Boolean,
  category_ids: [{ type: ObjectId, ref: 'Category' }],
  brand_id: { type: ObjectId, ref: 'Brand' },
  quantity: Number,
  thumbnail: String,
  images: [String],
  description: String,
  variants: [{ sku: String, barcode: String, price: Number, checked: Boolean, attributes: [Mixed] }],
  variantKVs: [{ name: String, values: [String] }],
  status_code: { type: String, default: 'in-stock' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

ProductSchema.statics = {
  /**
   * Get a product by id
   * @param {ObjectId} id - The objectId of product.
   * @returns {Promise<Product, APIError>}
   */
  get (id) {
    return this.findById(id)
      .exec()
      .then(product => {
        if (product) {
          return product
        }
        const err = new APIError('No such product exists!', httpStatus.NOT_FOUND)
        return Promise.reject(err)
      })
  },

  /**
   * Gets a list products in descending order of 'created_at' timestamp.
   * @param {number} skip - Number of products to be skipped.
   * @param {number} limit - Limit number of products to be returned.
   * @param {String} req.query.brand - Search product by brand
   * @param {String} req.query.category - Search product by category
   * @param {String} req.query.sku - Search product by sku
   * @returns {Promise<Product[]>}
   */
  list (skip = 0, limit = 0, sku = null, category = null, brand = null) {
    let query = this.find().sort({ created_at: -1 })

    if (brand) brand = query.where({ brand })
    if (category) query = query.where('category_ids').in(category)
    if (sku) query = query.where({ 'variants.sku': sku })
    if (skip > 0) query = query.skip(skip)
    if (limit > 0) query = query.limit(limit)

    return query
      .populate('category_ids')
      .populate('brand_id')
      .exec()
  },

  /**
   * Gets total customers
   * @returns {Promise<Number>}
  */
  total () {
    return this.find().count().exec()
  }
}

module.exports = mongoose.model('Product', ProductSchema)
