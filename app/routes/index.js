const router = require('express').Router()
const bookRouter = require('./book.router')
const userRouter = require('./user.router')

router.use('/book', bookRouter)
router.use('/user', userRouter)
module.exports = router