const express= require('express');
const router= express.Router();
const UserRouter= require('./user');
const { AccountRouter } = require('./account');

router.use('/user', UserRouter);
router.use('/accounts', AccountRouter)

module.exports={
    router
}