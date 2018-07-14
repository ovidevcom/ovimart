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

describe('## Brands APIs', () => {
  let brand = {
    name: 'Reinger and Sons',
    description: 'Pre-emptive content-based task-force',
    images: [
      'http://lorempixel.com/640/480/business',
      'http://lorempixel.com/640/480/business',
      'http://lorempixel.com/640/480/business'
    ]
  }

  describe('# POST /api/brands', () => {
    it('should add a new brand', (done) => {
      request(app)
        .post('/api/brands')
        .send(brand)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.brand.name).to.equal(brand.name)
          brand = res.body.brand
          done()
        })
        .catch(done)
    })
  })

  describe('# PUT /api/brands/:id', () => {
    it('should update a brand', (done) => {
      brand.name = 'PUMA'
      request(app)
        .put(`/api/brands/${brand._id}`)
        .send(brand)
        .expect(httpStatus.OK)
        .then((res) => {
          done()
        })
        .catch(done)
    })
  })

  describe('# GET /api/brands', () => {
    it('should get all brands', (done) => {
      request(app)
        .get('/api/brands')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.brands).to.be.an('array')
          done()
        })
        .catch(done)
    })

    it('should get all brands (with limit and skip)', (done) => {
      request(app)
        .get('/api/brands')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.brands).to.be.an('array')
          done()
        })
        .catch(done)
    })
  })

  describe('# DELETE /api/brands/:id', () => {
    it('should delete a brand', (done) => {
      request(app)
        .delete(`/api/brands/${brand._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          done()
        })
        .catch(done)
    })
  })
})
