const Express = require('express')
const Controller = require('./quotes.controller')

const router = Express.Router()

router.route('/')
  /** GET /api/quotes - Gets list of quotes */
  .get(Controller.list)
  /** POST /api/quotes - Adds a new quote */
  .post(Controller.add)

router.route('/:id')
  /** GET /api/quotes/:id - Gets a quote */
  .get(Controller.get)
  /** PUT /api/quotes/:id - Updates a quote */
  .put(Controller.edit)
  /** DELETE /api/quotes/:id - Deletes a quote */
  .delete(Controller.remove)

/** Load brand when API with id route parameter is hit */
router.param('id', Controller.load)

module.exports = router
