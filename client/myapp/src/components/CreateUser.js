import { useState } from "react";
import { createUser } from "../utils/users";
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  Avatar,
  MenuItem,
  Select,
  FormHelperText,
  Link
} from "@material-ui/core";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { useStyles } from "../style/style";
 

export default function CreateUser() {
  const classes = useStyles();
 
  const [user, setUser] = useState([]);
  const [role, setRole] = useState('');
  const [err, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleRole = (event) => {
    
    setRole(event.target.value);
  };
  const handleSubmit = (e) => {
   e.preventDefault();
   user.role = role
   let username = user.username
  createUser(user).then((res) => {
    res === true
      ? setMessage(`${username} user created successfully`)
      : res.Nickname !== undefined
      ? setMessage(`This ${Object.keys(res)} :  ${res?.Nickname} is already exists`)
      : res.Username !== undefined?
      setMessage(`This ${Object.keys(res)} : ${res?.Username} is already exists`):
      setMessage("Please fill all fields!!")
  })}
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <PersonAddIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create user
        </Typography>
        <form className={classes.form} validate>
          <TextField
            type="text"
            name="nickname"
            onChange={handleChange}
            label="Enter your nickname"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            autoComplete="nickname"
          />
          <TextField
            type="text"
            name="username"
            onChange={handleChange}
            label="Enter your username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="username"
          />
          <TextField
            type="password"
            name="password"
            onChange={handleChange}
            label="Enter your password"
            variant="outlined"
            margin="normal"
            autoComplete="current-password"
            required
            fullWidth
            
          />

          <Select
            htmlFor="roles"
            name="roles"
            id="roles"
            value={role}
            style={{ minWidth: 410 }}
            onChange={handleRole}
          >

            <MenuItem value="USER">user</MenuItem>
            <MenuItem value="ADMIN">admin</MenuItem>
          </Select>
          <FormHelperText>Please chose user role</FormHelperText>

          <Button
            className={classes.submit}
            type="submit"
            value="Create User"
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            fullWidth
          >
            Create User
          </Button>
        </form>
      </div>
      <Typography component="h6" variant="h6">{err}</Typography> 
      <Link href="/" variant="body2">
              {"Back to login"}
            </Link>
    </Container>
  );
}
