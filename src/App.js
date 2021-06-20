import React , {useState} from "react";
import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css"

//react route
import {Link, BrowserRouter as Router, Switch, Route} from "react-router-dom"

//Toast
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"

//firebase 
import firebase from "firebase/app";
import "firebase/auth";

//Components
import Home from "./pages/Home"
import PageNotFound from "./pages/PageNotFound"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

import  {UserContext}  from "./Context/UserContext";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

import firebaseConfig from "./Config/FireBaseConfig"
//init firebase app
firebase.initializeApp(firebaseConfig)

const  App = () => {

  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user,setUser}} >
        <Header />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/signin" component={Signin} /> 
          <Route exact path="/signup" component={Signup} /> 
          <Route exact path="*" component={PageNotFound} /> 
        </Switch>
        <Footer/>
      </UserContext.Provider>
    </Router>
  )
}

export default App;
