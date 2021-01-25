 
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CreateUser from './pages/createUser'
import ImgView from './pages/imgView'
import AllUsers from './pages/allUsers'
import Login from './pages/login'

function App() {
  return (
    <>
  
    <Router>
   
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
