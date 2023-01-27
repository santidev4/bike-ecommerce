import { Router } from 'express'
import { getDbProducts, postProduct, deleteProduct, getCategories, postCategory, deleteCategory, postBrand, getBrands, deleteBrand, getWheelSize, createWheelSize } from '../controllers/index'
import { isAdmin } from '../midlleware/isAdmin'

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
router.get('/wheel_size', getWheelSize)
router.post('/wheel_size', isAdmin, createWheelSize)

module.exports = router
