const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')
// get goals
// route:   GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// post goals
// route:   GET /api/goals
const postGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a Text Field')
    }

    const goal = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goal)
})

// Update goals
// route:   GET /api/goals
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    const updateGoal = await Goal.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {new: true,}
        )

    
    res.status(200).json(updateGoal)
})

// delete goals
// route:   GET /api/goals
const deleteGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
    // const deleteGoal = await Goal.findByIdAndDelete(
    //     req.params.id, 
    //     )
    await goal.remove()


    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals

}