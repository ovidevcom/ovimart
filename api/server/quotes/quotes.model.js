const Promise = require('bluebird')
const mongoose = require('mongoose')
const httpStatus = require('http-status')
const APIError = require('../helpers/APIError')

const { ObjectId, Mixed } = mongoose.SchemaTypes

const QuoteSchema = new mongoose.Schema({
  // admin_id: ObjectId,
  session_id: String,
  customer: { type: ObjectId, ref: 'Customer' },
  items: [{
    name: String,
    product_id: ObjectId,
    sku: String,
    price: Number,
    quantity: Number,
    note: String,
    attributes: Mixed
  }],
  note: String,
  status_code: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

QuoteSchema.statics = {
  /**
   * Get a quote by id
   * @param {ObjectId} id - The objectId of quote.
   * @returns {Promise<Brand, APIError>}
   */
  get (id) {
    return this.findById(id)
      .populate('customer')
      .exec()
      .then((quote) => {
        if (quote) {
          return quote
        }
        const err = new APIError('No such quote exists!', httpStatus.NOT_FOUND)
        return Promise.reject(err)
      })
  },
  /**
   * Gets a list quotes in descending order of 'created_at' timestamp.
   * @param {String} session_id - session_id that quotes are belonged to.
   * @param {Number} skip - Number of quotes to be skipped.
   * @param {Number} limit - Limit number of quotes to be returned.
   * @returns {Promise<Quote[]>}
   */
  list (session_id, skip = 0, limit = 0) {
    let query = session_id
      ? this.find({ session_id })
      : this.find()

    query = query
      .find({ status_code: { $ne: 'completed' } })
      .sort({ created_at: -1 })

    if (skip) query = query.skip(skip)
    if (limit) query = query.limit(limit)

    return query
      .populate('customer')
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

module.exports = mongoose.model('Quote', QuoteSchema)
