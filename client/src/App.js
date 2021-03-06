import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./pages/Login";
import NewUser from "./pages/NewUser";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <>
        <Nav/>
        <Switch>
          <Route exact path = "/" component = {Login}/>
          <Route exact path = "/newuser" component = {NewUser}/>
          <Route exact path = "/search" component = {Search}/>
          <Route exact path = "/library" component ={Library}/>
        </Switch>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
