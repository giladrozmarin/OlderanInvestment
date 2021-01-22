const User  = require('../model/UsersModel')

exports.createUser = function (obj) 
{
    return new Promise((res,rej) => {
        const u = new User({
            Nickname: obj.Nickname,
            Username: obj.Username,
            Password:obj.Password,
            Create_time:obj.Create_time,
            Status:obj.Status,
            roles:obj.roles
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

