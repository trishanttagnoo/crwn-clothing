import './App.css';
import React from 'react';

// import { Switch,  Route, Router } from 'react-router-dom';
import {Route, Routes, Switch} from "react-router-dom";
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// HatsPage Component for Routing Purpose
// const HatsPage = () =>(
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );



function App() {
  return (
    <div>
     

 <Switch>
    <Route  exact path="/" component={HomePage} />
    <Route  path="/shop" component={ShopPage} />
</Switch>
 
    </div>
  );
}

export default App;
