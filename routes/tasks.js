const {Router} = require('express')
const {createTask, readTasks, updateTask, deleteTask, readTaskDetail} = require('../controllers/tasks')
const jwtauth = require('../middleware/auth')

// Validation
const {validate} = require('../middleware/validation')
const {createTasksVal, readTaskDetailsVal, deleteTasksVal, updateTasksVal} = require('../middleware/validators')

const taskRouter = Router()

taskRouter.get('/', jwtauth, readTasks)
taskRouter.get('/:taskId', jwtauth, readTaskDetailsVal, validate, readTaskDetail)
taskRouter.post('/', jwtauth, createTasksVal, validate, createTask)
taskRouter.put('/:taskId', jwtauth, updateTasksVal, validate, updateTask)
taskRouter.delete('/:taskId', jwtauth, deleteTasksVal, validate, deleteTask)

module.exports = taskRouter