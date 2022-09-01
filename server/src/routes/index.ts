import { Router } from 'express'
const { isAdmin, getDbProducts, postProduct, getCategories, postCategory, postBrand, getBrands } = require('../controllers/index')

const router = Router()

router.get('/products', getDbProducts)
router.post('/products', isAdmin, postProduct)
router.get('/categories', getCategories)
router.post('/categories', isAdmin, postCategory)
router.get('/brands', getBrands)
router.post('/brands', isAdmin, postBrand)

module.exports = router
