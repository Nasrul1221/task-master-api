const {Router} = require('express')
const {createTask, readTasks, updateTask, deleteTask, readTaskDetail} = require('../controllers/tasks')

const taskRouter = Router()

taskRouter.get('/', readTasks)
taskRouter.get('/:taskId', readTaskDetail)
taskRouter.post('/', createTask)
taskRouter.put('/:taskId', updateTask)
taskRouter.delete('/:taskId', deleteTask)

module.exports = taskRouter