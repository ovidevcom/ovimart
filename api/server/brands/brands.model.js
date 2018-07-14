const Promise = require('bluebird')
const mongoose = require('mongoose')
const httpStatus = require('http-status')
const APIError = require('../helpers/APIError')

const BrandSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  product_count: Number,
  status_code: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

BrandSchema.statics = {
  /**
   * Get a brand by id
   * @param {ObjectId} id - The objectId of brand.
   * @returns {Promise<Brand, APIError>}
   */
  get (id) {
    return this.findById(id)
      .exec()
      .then((brand) => {
        if (brand) {
          return brand
        }
        const err = new APIError('No such brand exists!', httpStatus.NOT_FOUND)
        return Promise.reject(err)
      })
  },
  /**
   * Gets a list brands in descending order of 'created_at' timestamp.
   * @param {number} skip - Number of brands to be skipped.
   * @param {number} limit - Limit number of brands to be returned.
   * @returns {Promise<Brand[]>}
   */
  list (skip = 0, limit = 10) {
    return this.find()
      .sort({ created_at: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec()
  }
}

module.exports = mongoose.model('Brand', BrandSchema)
