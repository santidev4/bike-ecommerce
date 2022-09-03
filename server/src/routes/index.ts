import { Router } from 'express'
const { getDbProducts, postProduct, getCategories, postCategory, postBrand, getBrands } = require('../controllers/index')
const { isAdmin } = require('../midlleware/isAdmin')

const router = Router()

router.get('/products', getDbProducts)
router.post('/products', isAdmin, postProduct)
router.get('/categories', getCategories)
router.post('/categories', isAdmin, postCategory)
router.get('/brands', getBrands)
router.post('/brands', isAdmin, postBrand)

module.exports = router
