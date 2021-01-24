 
import './App.css';
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";

import CreateUser from './pages/createUser'
import ImgView from './pages/imgView'
import AllUsers from './pages/allUsers'
import Login from './pages/login'

function App() {
  return (
    <>
  
    <Router>
    <Link to={"/CreateUser"}> Create Account</Link> <br/>
    <Link to={"/AllUsers"}>get All users</Link> <br/>
    <Link to={"/ImgView"}> Image viewer</Link> <br/>
    <Link to={"/"}> Login</Link> <br/>
      <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/CreateUser" component={CreateUser} />
          <Route exact path="/AllUsers" component={AllUsers} />
          <Route exact path="/ImgView" component={ImgView} />
    </Switch>
    </Router>
    </>
  );
}

export default App;
