
import {useState} from 'react'


export default function CreateUser() {
 
    const [user,setUser] = useState([])

    function handleChange (e) {
        const {name,value} = e.target 
        setUser( prevState => ({...prevState,[name]:value}))
        console.log(user)
    }
    return (


       <form>
      
       <input type="text" name="nickname" onChange={handleChange} value={user.name} placeholder="Enter your nickname"/>
       <input type="text" name="username" onChange={handleChange} value={user.name} placeholder="Enter your username"/>
       <input type="password" name="password" onChange={handleChange} value={user.name} placeholder="Enter your password"/>

       <input type="submit" value="Create User" />
       </form>
    )
}