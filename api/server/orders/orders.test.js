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

describe('## Order APIs', () => {
  let order = {
    customer: {
      customer_id: ObjectId('5b3dc23013075242c25256d7'),
      first_name: 'Christiana',
      last_name: 'McGlynn',
      gender: 'Female',
      birthday: (new Date('2018-07-04T17:00:00.000Z')).toDateString(),
      phone_number: '585.026.5266 x9478',
      email: 'caitlyn.hegmann@hotmail.com'
    },
    items: [{
      name: 'ULTRABOOST PARLEY SHOES',
      product_id: ObjectId('5b4417206451f52c0003201b'),
      sku: 'AC78360',
      price: 180,
      quantity: 2,
      note: '',
      attributes: { Size: 'S', Color: 'Red' }
    }],
    as_gift: false,
    shipping: {
      method: 'UPS',
      tracking_number: 'AAA',
      address: {
        first_name: 'Christiana',
        last_name: 'McGlynn',
        company: '',
        phone_number: '585.026.5266 x9478',
        street: '814 Thompson Parks',
        city: 'Kshlerinside',
        zip_code: '05245-6667',
        state: 'North Carolina',
        country: 'China'
      }
    },
    payment: {
      method: 'CASH',
      amount: Number,
      change: Number
    },
    note: ''
  }

  describe('# POST /api/orders', () => {
    it('should add a new order', (done) => {
      request(app)
        .post('/api/orders')
        .send(order)
        .expect(httpStatus.OK)
        .then((res) => {
          order = res.body.order
          done()
        })
        .catch(done)
    })
  })

  describe('# GET /api/orders', () => {
    it('should get all orders', (done) => {
      request(app)
        .get('/api/orders')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.orders).to.be.an('array')
          done()
        })
        .catch(done)
    })

    it('should get all orders (with limit and skip)', (done) => {
      request(app)
        .get('/api/orders')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.orders).to.be.an('array')
          done()
        })
        .catch(done)
    })
  })
})
