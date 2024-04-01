import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useState } from 'react'
import CategoriesContext from './Context/CategoriesContext';

// import the library
import { library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import {Routes,Route} from 'react-router-dom';

import TopNav from './components/TopNav/TopNav';
import CatNav from './components/CatNav/CatNav';
import MainComponent from './components/MainComponent/MainComponent';
import LandingPage from './components/LandingPage';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';


// import your icons
function App() {

  let [cartCount,setCartCount ] =useState(0);
  library.add(fab, fas, far)


  
  
  return  (
    <div className='App'>
<TopNav  />
<CatNav />
<Routes>
<Route path="/cart" element={<Cart />} />
  
  <Route path="/" element={<LandingPage  />} />
  <Route path="/productdetails" element={<ProductDetails />} />
</Routes>
  </div>
  );

}

export default App;
