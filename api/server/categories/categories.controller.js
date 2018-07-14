const Category = require('./categories.model')

/**
 * Find and load a category to req
 */
function load (req, res, next, id) {
  Category
    .get(id)
    .then(category => {
      req.category = category // eslint-disable-line no-param-reassign
      return next()
    })
    .catch(e => next(e))
}

/**
 * Gets a list of categories.
 * @property {number} req.query.skip - Number of categories to be skipped.
 * @property {number} req.query.limit - Limit number of categories to be returned.
 * @returns {Category[]}
 */
function list (req, res, next) {
  const { limit = 10, skip = 0 } = req.query
  Category
    .list(skip, limit)
    .then(categories => res.json({ categories }))
    .catch(e => next(e))
}

/**
 * Adds a new category
 * @param {String} req.body.name
 * @param {String} req.body.description
 * @param {[String]} req.body.image
 * @returns {Category}
 */
function add (req, res, next) {
  const { name, description, image } = req.body
  const category = new Category({
    name,
    description,
    image,
    product_count: 0,
    status_code: 'active'
  })

  category
    .save()
    .then(category => res.json({ category }))
    .catch(e => next(e))
}

/**
 * Updates a category
 * @param {String} req.body.name
 * @param {String} req.body.description
 * @param {[String]} req.body.image
 * @param {String} req.body.status_code
 * @returns {String} status code
 */
function edit (req, res, next) {
  const { category, body: { name, description, image, status_code } } = req

  category.set({
    name,
    description,
    image,
    status_code,
    product_count: category.product_count,
    updated_at: Date.now()
  })

  category
    .save()
    .then(_ => res.sendStatus(200))
    .catch(e => next(e))
}

/**
 * Deletes a category
 */
function remove (req, res, next) {
  req.category
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
