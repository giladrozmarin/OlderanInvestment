const users = require('../DAL/users')

exports.createUser =  async (obj) => {
    try {
     return(await users.createUser(obj))
     
    }
    catch (err) {
        console.table(err)
    }
   
}


exports.authUser = async (id,user_data) => {
     try{
     //let data = await users.getUserById(id)
     let {username,password} =user_data
     let data = await users.getUserByUserName(username,password)
     //check if its true/false
     return data.length === 0 ? false : true
     
     
     }
     catch(err){
         console.log(err)
     }
}

exports.getAllUsers = async () => {

   
    try{
      let data = await users.getAllUsers()
       //check if its true/false
      return data
    }   
    catch(err){
        console.log(err)
    }
}