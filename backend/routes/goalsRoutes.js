const express = require('express')
const router = express.Router()
const { getGoals, createGoal, updateGoal, deleteGoal
} = require('../controllers/GoalsController')

//Get view Goals
router.get('/', getGoals)

//Create goal
router.post('/', createGoal)

//Update goal id is required
router.put('/:id', updateGoal)

//Delete goal id is required
router.delete('/:id', deleteGoal)




module.exports = router