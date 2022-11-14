//add async handler

const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//@desc Get Goal
//@route GET /api/Goal
//@access Private
const getGoals = asyncHandler(async (req, res) => {
    //get goals through our mongoDB returns all of the goals

    const goals = await Goal.find()

    res.status(200).json(goals)
})

//@desc Set Goal
//@route POST /api/Goal
//@access Private
const createGoal = asyncHandler(async (req, res) => {

    //If body text in req is not there we set status to
    if (!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }
    const goal = await Goal.create({

        text: req.body.text

    })

    res.status(200).json(goal)
})

//@desc Update Goal
//@route PUT /api/Goal/id
//@access Private
const updateGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    //New set to true will tell mongoose to create it if the goal does not exist
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.
        body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})

//@desc Delete Goal
//@route DELETE /api/Goal/id
//@access Private
const deleteGoal = asyncHandler(async (req, res) => {

    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal does not exist')
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id, req.body)

    res.status(200).json(`This object document has been deleted succesfully ${deletedGoal}!`)
})

module.exports = {
    getGoals, createGoal, updateGoal, deleteGoal,
}