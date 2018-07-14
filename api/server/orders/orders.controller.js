const Order = require('./orders.model')

/**
 * Find and load a order to req
 */
function load (req, res, next, id) {
  Order
    .get(id)
    .then(order => {
      req.order = order // eslint-disable-line no-param-reassign
      return next()
    })
    .catch(e => next(e))
}

/**
 * Gets a order.
 * @returns {Order}
 */
function get (req, res) {
  return res.json({ order: req.order })
}
/**
 * Gets a list of orders.
 * @property {number} req.query.page - Number of orders to be skipped.
 * @property {number} req.query.limit - Limit number of orders to be returned.
 * @property {number} req.query.count - Whether to return total of orders or not.
 * @returns {Order[]} || {Order[], Number}
 */
async function list (req, res, next) {
  const { page = 0, limit = 0, count = false } = req.query

  try {
    const orders = await Order.list(+page, +limit)

    if (count) {
      const total = await Order.total()

      res.json({ orders, total })
    } else {
      res.json({ orders })
    }
  } catch (err) {
    next(err)
  }
}

/**
 * Adds a new order
 * @param {Mixed} req.body.customer see Customer model
 * @param {[Object]} req.body.items items: { name, product_id, sku, price, quantity, atttributes, note }
 * @param {Boolean} req.body.as_gift
 * @param {Mixed} req.body.payment { method, amount, change }
 * @param {Mixed} req.body.shipping { method, tracking_number, customer.address }
 * @param {String} req.body.note
 * @returns {Order}
 */
function add (req, res, next) {
  const {
    customer, items, as_gift, payment, shipping, note
  } = req.body

  const sum = items.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const order = new Order({
    customer,
    items,
    as_gift,
    payment,
    shipping,
    note,
    subtotal: sum,
    total: sum
  })

  order
    .save()
    .then(_ => res.sendStatus(200))
    .catch(e => next(e))
}

module.exports = {
  load,
  get,
  list,
  add
}
