import React from 'react'

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Services from './Services';
import Error from './Error';
import Footer from './Footer';
import {Switch,Route,Redirect} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
const App = () => {
  return (
    <>
    <Navbar/>
    <Switch>
      <Route exact path="/" component = {Home}/>
      <Route  exact path = "/about" component = {About}/>
      <Route exact path = "/contact" component = {Contact}/>
      <Route exact path = "/gallery" component = {Services}/>
      <Route component = {Error}/>
      <Redirect to="/"/>
    </Switch>
   <Footer/>
  
    </>
  )
}

export default App

