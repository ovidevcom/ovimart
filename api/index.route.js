const express = require('express')
const userRoutes = require('./server/user/user.route')
const authRoutes = require('./server/auth/auth.route')
const brandsRoutes = require('./server/brands/brands.route')
const categoriesRoutes = require('./server/categories/categories.route')
const customersRoutes = require('./server/customers/customers.route')
const productsRoutes = require('./server/products/products.route')
const ordersRoutes = require('./server/orders/orders.route')
const quotesRoutes = require('./server/quotes/quotes.route')

const router = express.Router() // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
)

// mount user routes at /users
router.use('/users', userRoutes)

// mount auth routes at /auth
router.use('/auth', authRoutes)

// mount customers routes at /customers
router.use('/customers', customersRoutes)

// mount brands routes at /brands
router.use('/brands', brandsRoutes)

// mount categories routes at /categories
router.use('/categories', categoriesRoutes)

// mount products routes at /products
router.use('/products', productsRoutes)

// mount orders routes at /orders
router.use('/orders', ordersRoutes)

// mount quotes routes at /quotes
router.use('/quotes', quotesRoutes)

module.exports = router
