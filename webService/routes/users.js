const express = require('express')
const router = express.Router()
const users = require('../BL/users')

//1.api/users - Create a new User
router.route('/users').
    post( async (req,resp) =>
    {
    let obj = {
        Nickname: req.body.Nickname,
        Username: req.body.Username,
        Password: req.body.Password,
        Create_time: req.body.Create_time,
        Status: req.body.Status,
        roles: req.body.roles
    }
    let data = await users.createUser(obj)
     
    return resp.json(data)
            
    });
//2.api/users/:userId - Is sign in
router.route('/users/:userId').
    post( async (req,resp) =>
    {
       
      let data =  await users.authUser(req.params.userId)

     return resp.json("Is sign in")
            
    });
//3.api/admin/users - Export all users data
router.route('/admin/users').
    get(async (req,resp) =>
    {
      
    let data = await users.getAllUsers()
    return resp.json(data)
            
    });
module.exports = router; 