const users = require('../DAL/users')

exports.createUser =  async (obj) => {
    try {
     return(await users.createUser(obj))
     
    }
    catch (err) {
        console.table(err)
    }
   
}


exports.authUser = async (id) => {
     try{
     let data = await users.getUserById(id)
     return data
     //check if its true/false
     
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