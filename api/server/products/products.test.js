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

const ObjectId = mongoose.Types.ObjectId

describe('## Product APIs', () => {
  let product = {
    name: 'An Awesome Laptop',
    slug: 'an-awesome-laptop',
    sell_on_pos: true,
    category_ids: [ObjectId('5b3d80c8e4b9300c3bb3fb00')],
    brand_id: ObjectId('5b3d80c8e4b9300c3bb3faf8'),
    quantity: 12,
    thumbnail: 'http://localhost:4040/uploads/3d088515d4adabbd75edbdb3f8f58d2e',
    images: ['http://localhost:4040/uploads/3d088515d4adabbd75edbdb3f8f58d2e'],
    description: '<p>An Awesome Description</p>',
    variants: [
      { sku: 'A1', barcode: '', price: 12, checked: true, attributes: null },
      { sku: 'A1', barcode: '', price: 12, checked: true, attributes: [{ name: 'Size', value: 1 }] },
      { sku: 'A1', barcode: '', price: 12, checked: false, attributes: [{ name: 'Size', value: 2 }] }
    ],
    variantKVs: [{ name: 'Size', values: ['1', '2'] }]
  }

  describe('# POST /api/products', () => {
    it('should add a new product', (done) => {
      request(app)
        .post('/api/products')
        .send(product)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.product.name).to.equal(product.name)
          product = res.body.product
          done()
        })
        .catch(done)
    })
  })

  describe('# PUT /api/products/:id', () => {
    it('should update a product', (done) => {
      product.name = 'A Test Product'
      request(app)
        .put(`/api/products/${product._id}`)
        .send(product)
        .expect(httpStatus.OK)
        .then((res) => {
          done()
        })
        .catch(done)
    })
  })

  describe('# GET /api/products', () => {
    it('should get all products', (done) => {
      request(app)
        .get('/api/products')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.products).to.be.an('array')
          done()
        })
        .catch(done)
    })

    it('should get all products (with limit and skip)', (done) => {
      request(app)
        .get('/api/products')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.products).to.be.an('array')
          done()
        })
        .catch(done)
    })
  })

  describe('# DELETE /api/products/:id', () => {
    it('should delete a product', (done) => {
      request(app)
        .delete(`/api/products/${product._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          done()
        })
        .catch(done)
    })
  })
})
