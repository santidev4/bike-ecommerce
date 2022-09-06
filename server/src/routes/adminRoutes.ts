import { Router } from 'express'
const { postProduct, postBrand, postCategory } = require('../controllers/admin')

const adminRoutes = Router()

adminRoutes.post('/products', postProduct)
adminRoutes.post('/brands', postBrand)
adminRoutes.post('/category', postCategory)

module.exports = adminRoutes
