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

describe('## Quotes APIs', () => {
  let quote = {
    session_id: 'imex-pos',
    customer: ObjectId('5b3dc23013075242c25256d3'),
    items: [{
      name: 'ULTRABOOST PARLEY SHOES',
      product_id: ObjectId('5b4417206451f52c0003201b'),
      sku: 'AC78360',
      price: 180,
      quantity: 2,
      note: '',
      attributes: { Size: 'S', Color: 'Red' }
    }],
    note: 'this is a test',
    status_code: 'active'
  }

  describe('# POST /api/quotes', () => {
    it('should add a new quote', (done) => {
      request(app)
        .post('/api/quotes')
        .send(quote)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.quote.session_id).to.equal(quote.session_id)
          expect(res.body.quote.note).to.equal(quote.note)
          quote = res.body.quote
          done()
        })
        .catch(done)
    })
  })

  describe('# PUT /api/quotes/:id', () => {
    it('should update a quote', (done) => {
      quote.status_code = 'parked'
      request(app)
        .put(`/api/quotes/${quote._id}`)
        .send(quote)
        .expect(httpStatus.OK)
        .then((res) => {
          done()
        })
        .catch(done)
    })
  })

  describe('# GET /api/quotes', () => {
    it('should get all quotes', (done) => {
      request(app)
        .get('/api/quotes')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.quotes).to.be.an('array')
          done()
        })
        .catch(done)
    })

    it('should get all quotes (with limit and skip)', (done) => {
      request(app)
        .get('/api/quotes')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.quotes).to.be.an('array')
          done()
        })
        .catch(done)
    })
  })

  describe('# DELETE /api/quotes/:id', () => {
    it('should delete a quote', (done) => {
      request(app)
        .delete(`/api/quotes/${quote._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          done()
        })
        .catch(done)
    })
  })
})
