const {Router} = require('express')
const {createTask, readTasks, updateTask, deleteTask, readTaskDetail} = require('../controllers/tasks')

// Validation
const {validate} = require('../middleware/validation')
const {createRules, readRules, readDetailsRules, updateRules, deleteRules} = require('../middleware/validators')

const taskRouter = Router()

taskRouter.get('/', readRules, validate, readTasks)
taskRouter.get('/:taskId', readDetailsRules, validate, readTaskDetail)
taskRouter.post('/', createRules, validate, createTask)
taskRouter.put('/:taskId', updateRules, validate, updateTask)
taskRouter.delete('/:taskId', deleteRules, validate, deleteTask)

module.exports = taskRouter