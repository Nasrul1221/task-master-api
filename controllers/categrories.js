const pool = require('../db/db')

// CRUD

async function createCategory(req, res) {
    try {
        const userId = req.user.id
        const {name} = req.body
        
        const createdCategory = await pool.query('INSERT INTO categories (name, user_id) VALUES ($1, $2) RETURNING id, name', [name, userId])

        res.json({
            category: createdCategory.rows[0]
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Server error' })
    }
}

async function readCategories(req, res) {
    try {
        const userId = req.user.id

        const categories = await pool.query('SELECT * FROM categories WHERE user_id = $1', [userId])

        res.json({
            categories: categories.rows
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Server error' })
    }
}

async function updateCategory(req, res) {
    try {
        const userId = req.user.id
        const {name} = req.body
        const {categoryId} = req.params
        
        const updatedCategory = await pool.query('UPDATE categories SET name = $1 WHERE user_id = $2 AND id = $3 RETURNING *', [name, userId, categoryId])

        if (updatedCategory.rowCount === 0) {
            res.status(404).json({
                errors: [
                    {
                        msg: 'Not found'
                    }
                ]
            })

            return
        }

        res.json({
            updatedCategory: updatedCategory.rows[0]
        })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Server error' })
    }
}

async function deleteCategory(req, res) {
    try {
        const userId = req.user.id
        const {categoryId} = req.params
        
        const deletedCategory = await pool.query('DELETE FROM categories WHERE id = $1 AND user_id = $2', [categoryId, userId])

        if (deletedCategory.rowCount === 0) {
            res.status(404).json({
                errors: [
                    {
                        msg: 'Not found'
                    }
                ]
            })

            return
        }

        res.sendStatus(204)
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'Server error' })
    }
}

module.exports = {
    createCategory,
    readCategories,
    updateCategory,
    deleteCategory
}