import React, { useState } from 'react'
import SideNav from '../SideNav'
import Products from '../ProductsComponent/ProductsComponent'
import CategoriesContext from '../../Context/CategoriesContext';

//violation of separation of concerns
//redux, mobx,context
function MainComponent() {


  //prop drilling + state in the main component =>to manage component usage
  let [showProducts,setShowProducts] = useState(false);
  let [newVar,setNewVar] = useState(0);
  //newVar=2
  //setNewVar(2);
  let [cartCount,setCartCount] =useState(0);
  let [numberOfProducts,setNumberOfProducts] = useState(10);
  //numberOfProducts.initialValue
  
  


  let setMainComponentVariable= function(valueOfNewVar)
  {


    console.log("Setting the value of state variable new Var to:",valueOfNewVar);
      setNewVar(valueOfNewVar);
  }
   
  /*
          <CategoriesContext.Provider value={{value1:"1",mobiles:["mobile1","mobile2","mobile3"],watches:["watch1","watch2","watch3","watch4"]}} >
 
    </CategoriesContext.Provider>

  */
  return (
    <div className='container-fluid'>
  <CategoriesContext.Provider value={{value1:"1",mobiles:["mobile1","mobile2","mobile3"],watches:["watch1","watch2","watch3","watch4"]}} >
 
  
  <div className='row'>
      <div className='col-lg-2 col-md-3 col-sm-4'>
    
    <p> value of newVar in main component:{newVar}</p>
    <SideNav  setNumberOfProducts={setNumberOfProducts} showProducts={showProducts} setShowProducts={setShowProducts} />
    


    </div>
    <div className='col-lg-10 col-md-9 col-sm-8'>
    <Products typeOfProducts={"clothes"} numberOfProducts={numberOfProducts}     showProducts={showProducts} changeMainComponentVariable={setNewVar}  />
    </div>
    

    </div>
   
    </CategoriesContext.Provider>

    </div>

  )
}

export default MainComponent