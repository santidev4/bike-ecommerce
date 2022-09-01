import { Router } from 'express'
const { getDbProducts, postProduct, getCategories, postCategory, postBrand, getBrands } = require('../controllers/index')

const router = Router()

router.get('/products', getDbProducts)
router.post('/products', postProduct)
router.get('/categories', getCategories)
router.post('/categories', postCategory)
router.get('/brands', getBrands)
router.post('/brands', postBrand)

module.exports = router
