const asyncHandler = require('express-async-handler')

// get goals
// route:   GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// post goals
// route:   GET /api/goals
const postGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a Text Field')
    }
    res.status(200).json({message: 'Set goals'})
})

// Update goals
// route:   GET /api/goals
const updateGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Update goal ' + req.params.id})
})

// delete goals
// route:   GET /api/goals
const deleteGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Delete goal ' + req.params.id})
})

module.exports = {
    getGoals,
    postGoals,
    updateGoals,
    deleteGoals

}