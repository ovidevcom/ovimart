const Promise = require('bluebird')
const mongoose = require('mongoose')
const httpStatus = require('http-status')
const APIError = require('../helpers/APIError')

const CategorySchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  product_count: Number,
  status_code: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

CategorySchema.statics = {
  /**
   * Get a category by id
   * @param {ObjectId} id - The objectId of category.
   * @returns {Promise<Category, APIError>}
   */
  get (id) {
    return this.findById(id)
      .exec()
      .then((category) => {
        if (category) {
          return category
        }
        const err = new APIError('No such category exists!', httpStatus.NOT_FOUND)
        return Promise.reject(err)
      })
  },
  /**
   * Gets a list categories in descending order of 'created_at' timestamp.
   * @param {number} skip - Number of categories to be skipped.
   * @param {number} limit - Limit number of categories to be returned.
   * @returns {Promise<Category[]>}
   */
  list (skip = 0, limit = 10) {
    return this.find()
      .sort({ created_at: -1 })
      .skip(+skip)
      .limit(+limit)
      .exec()
  }
}

module.exports = mongoose.model('Category', CategorySchema)
