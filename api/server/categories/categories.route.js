const Express = require('express')
const Controller = require('./categories.controller')

const router = Express.Router()

router.route('/')
  /** GET /api/categories - Gets list of categories */
  .get(Controller.list)
  /** POST /api/categories - Adds a new category */
  .post(Controller.add)

router.route('/:id')
  /** PUT /api/categories/:id - Updates a category */
  .put(Controller.edit)
  /** DELETE /api/categories/:id - Deletes a category */
  .delete(Controller.remove)

/** Load category when API with id route parameter is hit */
router.param('id', Controller.load)

module.exports = router
