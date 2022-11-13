//add async handler

const asyncHandler = require('express-async-handler')

//@desc Get Goal
//@route GET /api/Goal
//@access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: "Get Goal Clippy" })
}

//@desc Set Goal
//@route POST /api/Goal
//@access Private
const createGoal = asyncHandler(async (req, res) => {

    //If body text in req is not there we set status to
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Set/Create Goal Clippy" })
})

//@desc Update Goal
//@route PUT /api/Goal/id
//@access Private
const updateGoal = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Update ${req.params.id} Goal Clippy` })
})

//@desc Delete Goal
//@route DELETE /api/Goal/id
//@access Private
const deleteGoal = asyncHandler (async (req, res) => {
    res.status(200).json({ message: `Delete ${req.params.id} Goal Clippy` })
})

module.exports = {
    getGoals, createGoal, updateGoal, deleteGoal,
}