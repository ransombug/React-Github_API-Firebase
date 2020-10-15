import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

// Import React Router
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

//Import Toastify Package
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//FireBase
import firebase from "firebase/app";
import "firebase/auth";

//Import Components
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import FirebaseConfig from "./DatabaseConfig/FirebaseConfig";

//Initialize FireBase
firebase.initializeApp(FirebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer></ToastContainer>
      <UserContext.Provider value={{ user, setUser }}>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/sin" component={SignIn}></Route>
          <Route exact path="/sup" component={SignUp}></Route>
          <Route exact path="*" component={PageNotFound}></Route>
        </Switch>
        <Footer></Footer>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
