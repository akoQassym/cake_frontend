import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import Landing from "./components/Landing/MainFile";
import NotFoundPage from "./components/Error/MainFile";
import Register from "./components/Auth/SignupForm";
import Login from "./components/Auth/LoginForm";
import Logout from "./components/Auth/Logout";
import Stock from "./components/Workplace/Stock/MainFile";
import Market from "./components/Workplace/Market/MainFile";

const App = () =>{
  return(
    <Router>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/market"> {localStorage.getItem("access_token")===null ? <Redirect to="/login" /> : <Market/>} </Route>
          <Route exact path="/stock/:ticker"> {localStorage.getItem("access_token")===null ? <Redirect to="/login" /> : <Stock/>} </Route>
          <Redirect to="/404"/>
        </Switch>
      </Suspense>
    </Router>
    
  )
}

export default App