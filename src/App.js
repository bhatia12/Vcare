import React from "react";
import { useDispatch} from "react-redux";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Home from "./components/Home";
import PrivateRoute from "./PrivateRoute/PrivateRoute"


const App = () => {
  return (
    <Router>
      <div>
        

        <div>
        
          <Switch>
            <PrivateRoute exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
