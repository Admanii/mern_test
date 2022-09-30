const express = require('express')
const router = express.Router()
const createError = require('http-errors')

//Can be in 1 line
const { getGoals } = require('../controller/goalController')
const { postGoals } = require('../controller/goalController')
const { updateGoals } = require('../controller/goalController')
const { deleteGoals } = require('../controller/goalController')
const { registerRoute } = require('../controller/goalController')
const { create } = require('../models/goalModel')


router.route('/').get(getGoals).post(postGoals)
// router.get('/', getGoals)
// router.post('/', postGoals)


router.route('/:id').delete(deleteGoals).put(updateGoals)
// router.put('/:id', updateGoals )
// router.delete('/:id', deleteGoals)



//APIs
// const register = asyncHandler(async(req, res, next) => {
//     res.send("Register Route")
// })
//router.post('/register', registerRoute)
router.post('/register', async(req, res, next) => {
    //res.send("Hello")
    console.log(req.body)
    try {
        const {email, password} = req.body
        if(!email || !password) throw createError.BadRequest()
    } catch (error) {
        next(error)
    }
    
} )

// const login = asyncHandler(async(req, res, next) => {
//     res.send("Login Route")
// })
router.post('/login', async(req, res, next) => {
    res.send("Login Route")
    //console.log("Magic")
} )


// const refresh-token = asyncHandler(async(req, res, next) => {
//     res.send("Register Route")
// })

router.post('/refresh-token', async(req, res, next) => {
    res.send("Refresh Token Route")
} )

router.delete('/logout', async(req, res, next) => {
    res.send("Logout Route")
} )

module.exports = router