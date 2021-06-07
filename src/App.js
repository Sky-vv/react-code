import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Route from "./components/route";
import CheckCounterPage from "../src/containers/CheckCounterContainer";
import RegisterPage from "../src/containers/RegisterContainer";
import LoginPage from "../src/containers/LoginContainer";
import page4 from "../src/components/page4/page4";
import page5 from "../src/components/page5/page5";
import page6 from "../src/components/page6/page6";
import page7 from "../src/components/page7/page7";

import { root, register, checkCounter, four, five, six, seven} from "./AppRoutes";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path={register} component={RegisterPage} />
          <Route path={checkCounter} component={CheckCounterPage} />
          <Route path={four} component={page4} />
          <Route path={five} component={page5} />
          <Route path={six} component={page6} />
          <Route path={seven} component={page7} />
          <Route path={root} component={LoginPage} />
          <Redirect to={root} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
