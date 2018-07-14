const Promise = require('bluebird')
const mongoose = require('mongoose')
const httpStatus = require('http-status')
const APIError = require('../helpers/APIError')

const { ObjectId, Mixed } = mongoose.SchemaTypes

const OrderSchema = new mongoose.Schema({
  customer: {
    customer_id: ObjectId,
    first_name: String,
    last_name: String,
    gender: String,
    birthday: Date,
    phone_number: String,
    email: String
  },
  items: [{
    name: String,
    product_id: ObjectId,
    sku: String,
    price: Number,
    quantity: Number,
    attributes: Mixed,
    note: String
  }],
  as_gift: Boolean,
  shipping: {
    method: String,
    tracking_number: String,
    address: {
      first_name: String,
      last_name: String,
      company: String,
      phone_number: String,
      street: String,
      city: String,
      zip_code: String,
      state: String,
      country: String
    }
  },
  payment: {
    method: String,
    amount: Number,
    change: Number
  },
  subtotal: Number,
  total: Number,
  note: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

OrderSchema.statics = {
  /**
   * Get a order by id
   * @param {ObjectId} id - The objectId of order.
   * @returns {Promise<Order, APIError>}
   */
  get (id) {
    return this.findById(id)
      .exec()
      .then(order => {
        if (order) {
          return order
        }
        const err = new APIError('No such product exists!', httpStatus.NOT_FOUND)
        return Promise.reject(err)
      })
  },
  /**
   * Gets a list orders in descending order of 'created_at' timestamp.
   * @param {number} skip - Number of orders to be skipped.
   * @param {number} limit - Limit number of orders to be returned.
   * @returns {Promise<Order[]>}
   */
  list (skip = 0, limit = 0) {
    let query = this.find().sort({ created_at: -1 })

    if (skip > 0) query = query.skip(skip)
    if (limit > 0) query = query.limit(limit)

    return query.exec()
  },

  /**
   * Gets total customers
   * @returns {Promise<Number>}
  */
  total () {
    return this.find().count().exec()
  }
}

module.exports = mongoose.model('Order', OrderSchema)
