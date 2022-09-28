const express = require('express')
const router = express.Router()

//Can be in 1 line
const { getGoals } = require('../controller/goalController')
const { postGoals } = require('../controller/goalController')
const { updateGoals } = require('../controller/goalController')
const { deleteGoals } = require('../controller/goalController')


router.route('/').get(getGoals).post(postGoals)
// router.get('/', getGoals)
// router.post('/', postGoals)


router.route('/:id').delete(deleteGoals).put(updateGoals)
// router.put('/:id', updateGoals )
// router.delete('/:id', deleteGoals)


module.exports = router