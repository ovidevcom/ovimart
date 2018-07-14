const Express = require('express')
const Controller = require('./customers.controller')

const router = Express.Router()

router.route('/')
  /** GET /api/customers - Gets list of customers */
  .get(Controller.list)
  /** POST /api/customers - Adds a new customer */
  .post(Controller.add)

router.route('/search')
  /** GET /api/customers/search?str= - Search customers by str */
  .get(Controller.search)

router.route('/:id')
  .get(Controller.get)
  /** PUT /api/customers/:id - Updates a customer */
  .put(Controller.edit)
  /** DELETE /api/customers/:id - Deletes a customer */
  .delete(Controller.remove)

/** Load customer when API with id route parameter is hit */
router.param('id', Controller.load)

module.exports = router
