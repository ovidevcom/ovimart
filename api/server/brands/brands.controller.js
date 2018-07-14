const Brand = require('./brands.model')

/**
 * Find and load a brand to req
 */
function load (req, res, next, id) {
  Brand
    .get(id)
    .then((brand) => {
      req.brand = brand // eslint-disable-line no-param-reassign
      return next()
    })
    .catch(e => next(e))
}

/**
 * Gets a list of brands.
 * @property {number} req.query.skip - Number of brands to be skipped.
 * @property {number} req.query.limit - Limit number of brands to be returned.
 * @returns {Brand[]}
 */
function list (req, res, next) {
  const { limit = 10, skip = 0 } = req.query
  Brand
    .list(skip, limit)
    .then(brands => {
      res.json({ brands })
    })
    .catch(e => next(e))
}

/**
 * Adds a new brand
 * @param {String} req.body.name
 * @param {String} req.body.description
 * @param {[String]} req.body.image
 * @returns {Brand}
 */
function add (req, res, next) {
  const { name, description, image } = req.body
  const brand = new Brand({
    name,
    description,
    image,
    product_count: 0,
    status_code: 'active'
  })

  brand
    .save()
    .then(brand => res.json({ brand }))
    .catch(e => next(e))
}

/**
 * Updates a brand
 * @param {String} req.body.name
 * @param {String} req.body.description
 * @param {[String]} req.body.image
 * @param {String} req.body.status_code
 * @returns {String} status code
 */
function edit (req, res, next) {
  const { brand, body: { name, description, image, status_code } } = req

  brand.set({
    name,
    description,
    image,
    status_code,
    product_count: brand.product_count,
    updated_at: Date.now()
  })

  brand
    .save()
    .then(_ => res.sendStatus(200))
    .catch(e => next(e))
}

/**
 * Deletes a brand
 */
function remove (req, res, next) {
  req.brand
    .remove()
    .then(_ => res.sendStatus(200))
    .catch(e => next(e))
}

module.exports = {
  load,
  list,
  add,
  edit,
  remove
}
