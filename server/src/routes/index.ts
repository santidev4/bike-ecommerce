import { Router } from 'express'
const { getDbProducts, postProduct, deleteProduct, getCategories, postCategory, deleteCategory, postBrand, getBrands, deleteBrand } = require('../controllers/index')
const { isAdmin } = require('../midlleware/isAdmin')

const router = Router()

router.get('/products', getDbProducts)
router.post('/products', isAdmin, postProduct)
router.delete('/products', isAdmin, deleteProduct)
router.get('/categories', getCategories)
router.post('/categories', isAdmin, postCategory)
router.delete('/categories', isAdmin, deleteCategory)
router.get('/brands', getBrands)
router.post('/brands', isAdmin, postBrand)
router.delete('/brands', isAdmin, deleteBrand)

module.exports = router
