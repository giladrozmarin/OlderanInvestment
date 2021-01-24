
import {useState} from 'react'
import {createUser} from '../utils/users'

export default function CreateUser() {
 
    const [user,setUser] = useState([])
    const [message,setMessage] = useState('')
    const handleChange = (e) => {
        const {name,value} = e.target 
        setUser( prevState => ({...prevState,[name]:value}))
        
    }
    
    const handleSubmit = () => 
    
    createUser(user).then(res => {
      res === true ? 
      setMessage('user created successfully'):
      res.Nickname === undefined?
      setMessage(`This ${Object.keys(res)} :  ${res?.Username} is already exists`):
      setMessage(`This ${Object.keys(res)} : ${res?.Nickname} is already exists`)
    }) 
    return (


       <>
      
       <input type="text" name="nickname" onChange={handleChange} placeholder="Enter your nickname"/>
       <input type="text" name="username" onChange={handleChange}  placeholder="Enter your username"/>
       <input type="password" name="password" onChange={handleChange} placeholder="Enter your password"/>
       

       <label htmlFor="roles">Choose a role:</label>
       <select name="roles" id="roles" onChange={handleChange}  >
       <option value="USER">user</option>
       <option value="ADMIN">admin</option>
       </select>

       <input type="submit" value="Create User" onClick={handleSubmit}/>
       <br/> 
     {message}
     </>
    )
}