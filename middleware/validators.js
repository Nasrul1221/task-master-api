const {body, query, param} = require('express-validator')

const createRules = [
    body('userId').isNumeric(),
    body('categoryId').optional().isNumeric(),
    body('title').trim().notEmpty().isLength({max: 30})
]

const readRules = [
    body('userId').notEmpty().isNumeric(),
    query('category').optional().trim().notEmpty(),
    query('search').optional().trim().notEmpty()
]

const readDetailsRules = [
    body('userId').notEmpty().isNumeric(),
    param('taskId').trim().notEmpty().isNumeric()
]

const updateRules = [
    ...createRules,
    param('taskId').trim().notEmpty().isNumeric()
]

const deleteRules = [
    ...readDetailsRules
]

module.exports = {
    createRules,
    readRules,
    readDetailsRules,
    updateRules,
    deleteRules
}