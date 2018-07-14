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

describe('## Customer APIs', () => {
  let customer = {
    first_name: 'Elvis',
    last_name: 'Stiedemann',
    gender: 'Male',
    birthday: (new Date()).toDateString(),
    phone_number: '055-090-8028',
    email: 'elvis1@yahoo.com',
    password: '',
    address: {
      first_name: 'Elvis',
      last_name: 'Stiedemann',
      company: '',
      phone_number: '055-090-8028',
      street: '736 Farrell Bypass',
      city: 'West Ramiro',
      zip_code: '98532-9988',
      state: 'Idaho',
      country: 'Saint Lucia'
    }
  }

  describe('# POST /api/customers', () => {
    it('should add a new customer', (done) => {
      request(app)
        .post('/api/customers')
        .send(customer)
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.customer.name).to.equal(customer.name)
          customer = res.body.customer
          done()
        })
        .catch(done)
    })
  })

  describe('# PUT /api/customers/:id', () => {
    it('should update a customer', (done) => {
      customer.name = 'PUMA'
      request(app)
        .put(`/api/customers/${customer._id}`)
        .send(customer)
        .expect(httpStatus.OK)
        .then((res) => {
          done()
        })
        .catch(done)
    })
  })

  describe('# GET /api/customers', () => {
    it('should get all customers', (done) => {
      request(app)
        .get('/api/customers')
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.customers).to.be.an('array')
          done()
        })
        .catch(done)
    })

    it('should get all customers (with limit and skip)', (done) => {
      request(app)
        .get('/api/customers')
        .query({ limit: 10, skip: 1 })
        .expect(httpStatus.OK)
        .then((res) => {
          expect(res.body.customers).to.be.an('array')
          done()
        })
        .catch(done)
    })
  })

  describe('# DELETE /api/customers/:id', () => {
    it('should delete a customer', (done) => {
      request(app)
        .delete(`/api/customers/${customer._id}`)
        .expect(httpStatus.OK)
        .then((res) => {
          done()
        })
        .catch(done)
    })
  })
})
