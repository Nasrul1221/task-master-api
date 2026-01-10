const {Router} = require('express')
const {readCategories, createCategory, updateCategory, deleteCategory} = require('../controllers/categrories')

const categoryRouter = Router()

categoryRouter.get('/', readCategories)
categoryRouter.post('/', createCategory)
categoryRouter.put('/:categoryId', updateCategory),
categoryRouter.delete('/:categoryId', deleteCategory)

module.exports = categoryRouter