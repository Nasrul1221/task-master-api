const pool = require('../db/db')

// CRUD
async function createTask(req, res) {
    try {
        const {userId, categoryId, title, content} = req.body

        if (!userId || !title) {
            res.json({
                error: "userId and title are required!"
            })

            return
        } 

        const createdTask = await pool.query('INSERT INTO tasks (user_id, category_id, title, task_content) VALUES ($1, $2, $3, $4) RETURNING *', [userId, categoryId, title, content])

        res.json(createdTask.rows[0])
    }
    catch (err) {
        res.json({
            err
        })
    }
}

async function readTasks(req, res) {
    try {
        const {userId} = req.body
        const tasks = await pool.query('SELECT * FROM tasks WHERE user_id = $1', [userId])

        res.json({
            tasks: tasks.rows
        })
    }
    catch (err) {
        res.json({
            err
        })
    }
}

async function readTaskDetail(req, res) {
    try {
        const {userId} = req.body
        const {taskId} = req.params

        if (!userId || !taskId) {
            res.json({
                error: "userId and taskId are required!"
            })

            return
        }

        const task = await pool.query('SELECT * FROM tasks WHERE user_id = $1 AND id = $2', [userId, taskId])

        res.json({
            task: task.rows[0]
        })
    }
    catch (err) {
        res.json({
            err
        })
    }
}

async function updateTask(req, res) {    
    try {
        const {title, content, category_id, userId} = req.body
        const {taskId} = req.params

        if (!title && !user_id && !id) {
            res.json({
                error: "title, user_id and id are required!"
            })

            return
        }

        const updatedTask = await pool.query('UPDATE tasks SET title = $1, task_content = $2, category_id = $3, updated_at = NOW() WHERE user_id = $4 AND id = $5 RETURNING title, task_content, category_id', [title, content, category_id, userId, taskId])

        res.json({
            task: updatedTask.rows[0]
        })
    }
    catch (err) {
        console.log(err)
        res.json({err})
    }
}

async function deleteTask(req, res) {
    try {
        const {userId} = req.body
        const {taskId} = req.params

        if (!userId || !taskId) {
            res.json({
                error: "userId and taskId are required"
            })

            return
        }

        const deletedTask = await pool.query('DELETE FROM tasks WHERE user_id = $1 AND id = $2', [userId, taskId])

        res.json({
            task: deletedTask
        })
    }
    catch (err) {
        console.log(err)
        res.json({err})
    }
}

module.exports = {
    createTask,
    readTasks,
    updateTask,
    deleteTask,
    readTaskDetail
}