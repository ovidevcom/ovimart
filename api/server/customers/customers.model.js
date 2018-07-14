const Promise = require('bluebird')
const mongoose = require('mongoose')
const httpStatus = require('http-status')
const APIError = require('../helpers/APIError')

const CustomerSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  gender: String,
  birthday: Date,
  phone_number: String,
  email: String,
  password_hash: String,
  note: String,
  tags: [String],
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
  },
  order_count: { type: Number, default: 0 },
  total_spent: { type: Number, default: 0 },
  status_code: { type: String, default: 'active' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

CustomerSchema.statics = {
  /**
   * Get a customer by id
   * @param {ObjectId} id - The objectId of customer.
   * @returns {Promise<Customer, APIError>}
   */
  get (id) {
    return this.findById(id)
      .exec()
      .then(customer => {
        if (customer) {
          return customer
        }
        const err = new APIError('No such customer exists!', httpStatus.NOT_FOUND)
        return Promise.reject(err)
      })
  },

  /**
   * Gets a list customers in descending order of 'created_at' timestamp.
   * @param {number} skip - Number of customers to be skipped.
   * @param {number} limit - Limit number of customers to be returned.
   * @returns {Promise<Customer[]>}
   */
  list (skip = 0, limit = 0) {
    let query = this.find()

    query = query.sort({ created_at: -1 })

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

module.exports = mongoose.model('Customer', CustomerSchema)
