const express = require('express')
const router = express.Router()
const users = require('../BL/users')

//1.api/users - Create a new User
router.route('/users').
    post( async (req,resp) =>
    {
    return resp.json(await users.createUser(req.body.user))    
    });
//2.api/users/:userId - Is sign in
router.route('/users/:userId').
    post( async (req,resp) =>
    {
    return resp.json(await users.authUser(req.params.userId,req.body.user_data))  
    });
//3.api/admin/users - Export all users data
router.route('/admin/users').
    get( async (req,resp) =>
    {
     return resp.json(await users.getAllUsers())           
    });
module.exports = router; 