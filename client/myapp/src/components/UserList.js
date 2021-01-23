import {useState,useEffect} from 'react';
import {getAllUsers} from '../utils/users'
export default function UserList() {
    const[users,setUsers] = useState([])
    
    useEffect(() => {
       getAllUsers().then(res => setUsers(res))},[])

    return(
        <>
        <h1>User list</h1>
        <ul>
        {
        users.map(v =>{
            return  <h3  key={v._id} >Nickname: {v.Nickname}</h3>
            })
      }
        </ul>
        </>
    )

}