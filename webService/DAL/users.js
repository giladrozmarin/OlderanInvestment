const User  = require('../model/UsersModel')

exports.createUser = function (obj) 
{
   
    return new Promise((res,rej) => {
        const u = new User({
            Nickname: obj.nickname,
            Username: obj.username,
            Password:obj.password,
            Create_time:obj.create_time,
            Status:obj.status,
            roles:obj.role
        })
        u.save ((err,data)=> {
            if(err){ 
                rej(err)
            } else{
               
                res(data) 
            }
        })
    })

}

exports.getUserById = (id) => {
 
    return new Promise((res, rej) => {
    {
        User.findById(id,(err,user)=>
        {
            if(err){ 
                rej(err)
            } else{
                res(user) 
            }
        })
    }})
 
}

exports.getUserByUserName= (userName,password) => {
 
    return new Promise((res, rej) => {
    {
        User.find({Username : userName , Password: password },(err,user)=>
        {
            if(err){ 
                rej(err)
            } else{
                res(user) 
            }
        })
    }})
 
}

exports.getAllUsers = function()
{
    return new Promise((res,rej) =>
        {
            User.find({}, (err,users) =>
            {
                if(err)
                {
                    rej(err)
                }
                else
                {
                    
                    res(users)
                }
            })
        })
}

