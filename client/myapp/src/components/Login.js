import { useState } from "react";
import { useHistory } from "react-router-dom";
import { authUser } from "../utils/users";
import {
  Button,
  TextField,
  Typography,
  Container,
  CssBaseline,
  Avatar,
  Grid,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useStyles } from "../style/style";

export default function Login() {
  const classes = useStyles();
  let history = useHistory();
  const [user, setUser] = useState([]);
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authUser(user).then((res) => {
      console.log(res);
      if (res === "ADMIN" || res === "USER") {
        history.push("/ImgView");
        sessionStorage["role"] = res;
      } else {
        setErr("Incorrect username or password");
      }
    });
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            type="text"
            name="username"
            onChange={handleChange}
            label="Enter your username"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            autoComplete="username"
          />
          <TextField
            type="password"
            name="password"
            onChange={handleChange}
            label="Enter your password"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoComplete="current-password"
          />
          <Button
            className={classes.submit}
            type="submit"
            value="login"
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            fullWidth
          >
            Login
          </Button>
          <Grid item>
            <Link href="CreateUser" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </form>
      </div>
      <Typography component="h5" variant="h5">
        {err}
      </Typography>
    </Container>
  );
}
