const Express = require('express')
const Controller = require('./orders.controller')

const router = Express.Router()

router.route('/')
  /** GET /api/orders - Gets list of orders */
  .get(Controller.list)
  /** POST /api/orders - Adds a new order */
  .post(Controller.add)

router.route('/:id')
  /** GET /api/orders/:id - Gets a order */
  .get(Controller.get)

router.param('id', Controller.load)

module.exports = router
