import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import HomePage from './pages/homepage/homepage.component';



render(
  <BrowserRouter>
   <App />
  </BrowserRouter>,
   document.getElementById('root')
);


