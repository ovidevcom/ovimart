const Express = require('express')
const Controller = require('./brands.controller')

const router = Express.Router()

router.route('/')
  /** GET /api/brands - Gets list of brands */
  .get(Controller.list)
  /** POST /api/brands - Adds a new brand */
  .post(Controller.add)

router.route('/:id')
  /** PUT /api/brands/:id - Updates a brand */
  .put(Controller.edit)
  /** DELETE /api/brands/:id - Deletes a brand */
  .delete(Controller.remove)

/** Load brand when API with id route parameter is hit */
router.param('id', Controller.load)

module.exports = router
