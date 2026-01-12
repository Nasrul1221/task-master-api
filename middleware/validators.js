const {body, query, param} = require('express-validator')

// TASKS 
const createTasksVal = [
    body('categoryId').optional().isNumeric().withMessage('categoryId is not a number!'),
    body('title').trim().notEmpty().withMessage('title is empty!').isLength({max: 30}).withMessage('The max length is 30')
]

const readTaskDetailsVal = [
    param('taskId').trim().notEmpty().withMessage('taskId is empty!').isNumeric().withMessage('taskId is not a number!')
]

const updateTasksVal = [
    ...createTasksVal,
    ...readTaskDetailsVal
]

const deleteTasksVal = [
    ...readTaskDetailsVal
]

// CATEGORIES
const createCategoryVal = [
    body('name').trim().notEmpty().withMessage('Category name is empty!')
]

const updateCategoryVal = [
    ...createCategoryVal,
    param('categoryId').trim().notEmpty().withMessage('categoryId is empty!').isNumeric().withMessage('categoryId is not a number')
]

const deleteCategoryVal = [
    param('categoryId').trim().notEmpty().withMessage('categoryId is empty!').isNumeric().withMessage('categoryId is not a number')
]

module.exports = {
    createTasksVal,
    readTaskDetailsVal,
    updateTasksVal,
    deleteTasksVal,

    createCategoryVal,
    updateCategoryVal,
    deleteCategoryVal
}