import { useState, useEffect } from "react";
import { getAllUsers } from "../utils/users";
export default function UserList() {
  const [users, setUsers] = useState([]);
  let color="green";
  useEffect(() => {
    getAllUsers().then((res) => setUsers(res));
  }, []);
  function status(v) {
    if (parseInt(v.Status) === 0) {
      color= "red";
    }
  }
 
  function time (v){
    let fullDate = v.Create_time
    let k = new Date(fullDate)
    return (`${k.getDate()}/${k.getMonth()+1}/${k.getFullYear()} ${k.getHours()}:${k.getMinutes()<10?'0':''}${ k.getMinutes()}:${k.getSeconds()<10?'0':''}${k.getSeconds()}`)
  }

  
  return (
    <>
    {(sessionStorage["role"]) === "ADMIN" ?  
    <>
    <h1>User list</h1>
      <ul>
        {users.map((v, i) => {
          return (
            <>
              <h2 key={v._id}>
                {i + 1}. Nickname: {v.Nickname}
              </h2>
              <h4>Username: {v.Username}</h4>
              <h4>roles: {v.roles} </h4>
              {status(v)}  
              <h4 style={{ color: color }}>
                status: {color === "red" ? "offline" : "online"}
              </h4>
              <h4>Created time: {time(v)}</h4>
            </>
          )
        })}
      </ul> </>:
      
      <h1 style={{ color: "red" }}>This page is only for admin</h1>
      }
     
    </>
  );
}
