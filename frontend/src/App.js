import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {useState} from 'react';

//screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'

//componets (Navbar,sidedrawer,Backdrop)
import Navbar from './components/Navbar'
import Backdrop from './components/Backdrop'
import SideDrawer from './components/SideDrawer'


function App() {
  const[sideToggle,setsideToggle]=useState(false);
  return( 
    <Router>
      <Navbar click={()=>setsideToggle(true)}/>
      <SideDrawer show={sideToggle} click={()=>setsideToggle(false)}/>
      <Backdrop show={sideToggle} click={()=>setsideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact  path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
  
    </Router>
  );
}

export default App;