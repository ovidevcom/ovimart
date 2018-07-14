const mongoose = require('mongoose')
const request = require('supertest-as-promised')
const httpStatus = require('http-status')
const chai = require('chai') // eslint-disable-line import/newline-after-import
const expect = chai.expect
const app = require('../../index')

chai.config.includeStack = true

/**
 * root level hooks
 */
after((done) => {
  // required because https://github.com/Automattic/mongoose/issues/1251#issuecomment-65793092
  mongoose.models = {}
  mongoose.modelSchemas = {}
  mongoose.connection.close()
  done()
})

describe('## Categories APIs', () => {
  let category = {
    name: 'Jewelery',
    description: 'Nam voluptatem reiciendis et unde at quidem.',
    images: [
      'http://lorempixel.com/640/480/abstract',
      'http://lorempixel.com/640/480/abstract'
    ]
  }

  describe('# POST /api/categories', () => {
    it('should add a new category', (done) => {
      request(app)
        .post('/api/categories')
        .send(category)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.category.name).to.equal(category.name)
          category = res.body.category
          done()
        })
        .catch(done)
    })
  })

  describe('# PUT /api/categories/:id', () => {
    it('should update a category', (done) => {
      category.name = 'Gadgets'
      request(app)
        .put(`/api/categories/${category._id}`)
        .send(category)
        .expect(httpStatus.OK)
        .then((res) => {
          done()
        })
        .catch(done)
    })
  })

  describe('# GET /api/categories', () => {
    it('should get all categories', (done) => {
      request(app)
        .get('/api/categories')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.categories).to.be.an('array')
          done()
        })
        .catch(done)
    })

    it('should get all categories (with limit and skip)', (done) => {
      request(app)
        .get('/api/categories')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.categories).to.be.an('array')
          done()
        })
        .catch(done)
    })
  })

  describe('# DELETE /api/categories/:id', () => {
    it('should delete a brand', (done) => {
      request(app)
        .delete(`/api/categories/${category._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          done()
        })
        .catch(done)
    })
  })
})
