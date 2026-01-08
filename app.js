const express = require('express');

// Routes
const taskRouter = require('./routes/tasks')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/tasks', taskRouter)

app.listen(PORT, error => {
    if (error) {
        res.send(error)
    }

    console.log('Success')
})