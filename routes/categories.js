const {Router} = require('express')
const {readCategories, createCategory, updateCategory, deleteCategory} = require('../controllers/categrories')
const jwtauth = require('../middleware/auth')

const {validate} = require('../middleware/validation')
const {createCategoryVal, updateCategoryVal, deleteCategoryVal} = require('../middleware/validators')

const categoryRouter = Router()

categoryRouter.get('/', jwtauth, readCategories)
categoryRouter.post('/', jwtauth, createCategoryVal, validate, createCategory)
categoryRouter.put('/:categoryId', jwtauth, updateCategoryVal, validate, updateCategory),
categoryRouter.delete('/:categoryId', jwtauth, deleteCategoryVal, validate, deleteCategory)

module.exports = categoryRouter