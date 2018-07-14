const elastic = require('../utils/esclient.js')
const Customer = require('./customers.model')

/**
 * Find and load a customer to req
 */
function load (req, res, next, id) {
  Customer
    .get(id)
    .then((customer) => {
      req.customer = customer // eslint-disable-line no-param-reassign
      return next()
    })
    .catch(e => next(e))
}

/**
 * Get a customer.
 * @returns {Customer}
 */
function get (req, res) {
  res.json({ customer: req.customer })
}

/**
 * Search customers using ElasticSearch.
 * @param {String} req.query.str Search string, first_name, last_name, phone_number, email
 * @returns {[Customer]}
 */
async function search (req, res, next) {
  const { str } = req.query

  try {
    const response = await elastic.client().search({
      index: 'customers',
      body: {
        suggest: {
          customer_suggest: {
            prefix: str,
            completion: {
              field: 'customer_suggest'
            }
          }
        }
      }
    })

    const { customer_suggest } = response.suggest
    // since we transform data for elastic search, id collision
    // transform data back to mongodb schema
    const customers = customer_suggest[0].options.map(c => {
      const { id, ...rest } = c['_source']
      return { _id: id, ...rest }
    })

    res.json({ customers })
  } catch (err) {
    next(err)
  }
}
/**
 * Gets a list of customers.
 * @property {number} req.query.page - Number of customers to be skipped.
 * @property {number} req.query.limit - Limit number of customers to be returned.
 * @property {number} req.query.count - Whether to return total of customers or not.
 * @returns {Customer[]} || {Customer[], Number}
 */
async function list (req, res, next) {
  const { page = 0, limit = 0, count = false } = req.query

  try {
    const customers = await Customer.list(+page, +limit)

    if (count) {
      const total = await Customer.total()

      res.json({ customers, total })
    } else {
      res.json({ customers })
    }
  } catch (err) {
    next(err)
  }
}

/**
 * Adds a new customer
 * @param {String} req.body.first_name
 * @param {String} req.body.last_name
 * @param {String} req.body.gender
 * @param {String} req.body.birthday
 * @param {String} req.body.phone_number
 * @param {String} req.body.email
 * @param {String} req.body.note
 * @param {String} req.body.tags
 * @param {Object} req.body.address
 * @returns {Customer}
 */
function add (req, res, next) {
  const { first_name, last_name, gender, birthday, phone_number, email, note, tags, address } = req.body

  const customer = new Customer({
    first_name,
    last_name,
    gender,
    birthday: birthday ? new Date(birthday) : null,
    phone_number,
    email,
    password_hash: '',
    note,
    tags,
    address
  })

  customer
    .save()
    .then(customer => res.json({ customer }))
    .catch(e => next(e))
}

/**
 * Updates a customer
 * @param {String} req.body.first_name
 * @param {String} req.body.last_name
 * @param {String} req.body.gender
 * @param {String} req.body.birthday
 * @param {String} req.body.phone_number
 * @param {String} req.body.email
 * @param {String} req.body.note
 * @param {String} req.body.tags
 * @param {Object} req.body.address
 * @param {String} req.body.status_code
 * @returns status code 200
 */
function edit (req, res, next) {
  const { customer, body: { first_name, last_name, gender, birthday, phone_number, email, tags, note, address, status_code } } = req

  customer.set({
    first_name,
    last_name,
    gender,
    birthday: birthday ? new Date(birthday) : null,
    phone_number,
    email,
    password_hash: '',
    address,
    tags,
    note,
    status_code
  })

  customer
    .save()
    .then(_ => res.sendStatus(200))
    .catch(e => next(e))
}

/**
 * Deletes a customer
 * @returns status code 200
 */
function remove (req, res, next) {
  req.customer
    .remove()
    .then(_ => res.sendStatus(200))
    .catch(e => next(e))
}

module.exports = {
  load,
  get,
  search,
  list,
  add,
  edit,
  remove
}
