const users = require('../DAL/users')

exports.createUser =  async (obj) => {
    try {
    let data = await users.createUser(obj)
 
    }
    catch (err) {
        console.table(err)
    }
   
}


exports.authUser = async (id) => {
     try{
     let data = await users.getUserById(id)
     //check if its true/false
     
     }
     catch(err){
         console.log(err)
     }
}

exports.getAllUsers = async () => {

   
   
      let data = await users.getAllUsers()
      console.log("hello123")
      //check if its true/false
      return data
 
}