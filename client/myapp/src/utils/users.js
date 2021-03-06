import axios from "axios";

const getAllUsers = async () => {
  let data = await axios.get("/api/admin/users");

  return data.data;
};

const authUser = async (user_data) => {
  let data = await axios.post(`/api/users/${user_data.username}`, {
    user_data,
  });

  return data.data;
};

const createUser = async (user) => {
  user.create_time = new Date();

  let data = await axios.post("/api/users", { user });

  return data.data;
};
export { getAllUsers, authUser, createUser };
