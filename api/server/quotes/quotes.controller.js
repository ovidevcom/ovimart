const Quote = require('./quotes.model')

/**
 * Find and load a quote to req
 */
function load (req, res, next, id) {
  Quote
    .get(id)
    .then(quote => {
      req.quote = quote // eslint-disable-line no-param-reassign
      return next()
    })
    .catch(e => next(e))
}

/**
  * Gets a quote
  * @returns {Quote}
  */
function get (req, res) {
  return res.json({ quote: req.quote })
}

/**
 * Gets a list of quotes.
 * @param {String} session_id - session_id that quotes are belonged to.
 * @property {number} req.query.page - Number of quotes to be skipped.
 * @property {number} req.query.limit - Limit number of quotes to be returned.
 * @property {number} req.query.count - Whether to return total of quotes or not.
 * @returns {Quote[]} || {Quote[], Number}
 */
async function list (req, res, next) {
  const { session_id, page = 0, limit = 0, count = false } = req.query

  try {
    const quotes = await Quote.list(session_id, +page, +limit)

    if (count) {
      const total = await Quote.total()

      res.json({ quotes, total })
    } else {
      res.json({ quotes })
    }
  } catch (err) {
    next(err)
  }
}

/**
 * Adds a new quote
 * @param {ObjectId} req.body.customer
 * @param {[Mixed]} req.body.items
 * @param {String} req.body.note
 * @returns {Quote}
 */
function add (req, res, next) {
  const { session_id, customer, items, note } = req.body
  const quote = new Quote({
    session_id,
    customer,
    items,
    note,
    status_code: 'active'
  })

  quote
    .save()
    .then(quote => res.json({ quote }))
    .catch(e => next(e))
}

/**
 * Updates a quote
 * @param {ObjectId} req.body.customer
 * @param {[Mixed]} req.body.items
 * @param {String} req.body.note
 * @param {String} req.body.status_code
 * @returns status code
 */
function edit (req, res, next) {
  const { quote, body: { customer, items, note, status_code } } = req

  quote.set({
    customer,
    items,
    note,
    status_code,
    updated_at: Date.now()
  })

  quote
    .save()
    .then(_ => res.sendStatus(200))
    .catch(e => next(e))
}

/**
 * Deletes a quote
 */
function remove (req, res, next) {
  req.quote
    .remove()
    .then(_ => res.sendStatus(200))
    .catch(e => next(e))
}

module.exports = {
  load,
  get,
  list,
  add,
  edit,
  remove
}
