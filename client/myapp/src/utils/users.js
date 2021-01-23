import axios from 'axios'


const getAllUsers = async () => {

    let data = await axios.get('http://localhost:3001/api/admin/users')
    
    return data.data
    
}

const authUser = async (user_data) => {
    

    let data = await axios.post(`http://localhost:3001/api/users/${user_data.username}`,
    {
        user_data
    }
    )
    
    return data.data
    
}
export {getAllUsers,authUser}




