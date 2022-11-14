const express = require('express')
const router = express.Router()
const { getGoals, createGoal, updateGoal, deleteGoal
} = require('../controllers/GoalsController')

//Add route  protection
const { protect } = require('../middleware/authMiddleware')

//Get view Goals
router.get('/', protect, getGoals)

//Create goal
router.post('/', protect, createGoal)

//Update goal id is required
router.put('/:id', protect, updateGoal)

//Delete goal id is required
router.delete('/:id', protect, deleteGoal)




module.exports = router