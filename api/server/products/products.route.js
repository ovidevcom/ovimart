const Express = require('express')
const multer = require('multer')({ dest: 'public/uploads/' })
const Controller = require('./products.controller')

const router = Express.Router()

router.route('/')
  /** GET /api/products - Gets list of products */
  .get(Controller.list)
  /** POST /api/products - Adds a new product */
  .post(Controller.add)

router.route('/search')
  /** GET /api/products/search - Search products by str */
  .get(Controller.search)

router.route('/image')
  /** POST /api/products/image - Upload image for product */
  .post(
    multer.single('image'),
    Controller.upload
  )

router.route('/:id')
  /** GET /api/products/:id - Gets a product */
  .get(Controller.get)
  /** PUT /api/products/:id - Updates a product */
  .put(Controller.edit)
  /** DELETE /api/products/:id - Deletes a product */
  .delete(Controller.remove)

router.param('id', Controller.load)

module.exports = router
