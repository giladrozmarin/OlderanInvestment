import { useState } from "react"
import { useHistory} from "react-router-dom";
import {authUser} from '../utils/users'

export default function Login () {
    let history = useHistory();
    const [user,setUser] = useState([])
    const [err,setErr] = useState('')
    const [check,setCheck] = useState('')

    const handleChange = (e) => {
         const{name,value} = e.target
         setUser(prevState => ({...prevState,[name]:value}))
    }
    
    const handleSubmit = () =>
        authUser(user).then(
            res => {
                setCheck(res)
                res === true ? 
                history.push("/ImgView") : 
                setErr('Incorrect username or password')
            })
    
    return(

       <>
     
       <input type="text" name="username" onChange={handleChange}   placeholder="Enter your username"/>
       <input type="password" name="password" onChange={handleChange}  placeholder="Enter your password"/>
       <input type="submit" value="login" onClick={handleSubmit} />
        
       <h5>{err}</h5>
       </>
    )
}