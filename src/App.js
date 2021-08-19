import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom"
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/login" component={LoginPage}/>
      <Route path="/register" component={RegisterPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
