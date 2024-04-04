import React, { useEffect,useMemo,useRef,useState } from 'react'
import './_side-nav.scss'
import { useDispatch, useSelector } from 'react-redux'
import accordionSlice from '../../Redux/Accordion/accordionSlice'
import { getCategories } from '../../Redux/Category/actions'
import { addItemToProduct, filterByPrice, filterProducts } from '../../Redux/Product/productSlice'
import CategoriesContext from '../../Context/CategoriesContext'
import { objectGroup } from 'fontawesome'
const SideNav = ({setNumberOfProducts,showProducts,setShowProducts}) => {

    let accordionData= useSelector(state=>state.categoryReducer.categories);
    let  fetchedProductData= useSelector(state=>state.productReducer)
    let [products,setProducts] = useState();
    let [stateVar,setStateVar] = useState();
    
     //categories,setCategories
    let [minPriceLimit,setMinPriceLimit]= useState(50);
    let [maxPriceLimit,setMaxPriceLimit]= useState(130);
  
    //let [showProductProxy,setShowProductProxy] = useState(false);

    
    const dispatch= useDispatch();

    useEffect(()=>{

         dispatch(getCategories());


    },[]);


    useEffect(()=>{


        setProducts(fetchedProductData.products)

   },[fetchedProductData.status]);

   
   const [recompute,setRecompute] = useState(false);

    //objects in javascripts are structured has hashmaps
   // object[functionName]= ()
    let table= {};
   // table[functionName][value1][value2]=
   //LRU cache implementation  =>memoisation
   
    const expensiveOperation= (key)=>
   {

   if(!table[key])
   {
     //calculate the value and store it in the hash table/map
     //perform the expensive calculation
     //store it and return the stored hash value for the given key or set of keys

   }
   else
   {
    return table[key];
   }

   }

   const expensiveFetchOperation = () => {
    
    console.log("calculating the operation");
    let result = 0;
    //fetch is taking a lot of time , we are mimicking this 
    for (let i = 0; i < 1000000000; i++) {
        result += 1;

    }
    return result;
};

// Using useMemo to memoize the result based on count
const result = useMemo(() => expensiveFetchOperation(), [recompute]);

//first time, result will be called
   const [memoisedValue,setMemoisedValue] = useState(result);




 const getMemoisedValue =function()
 {
    var startTime = performance.now()

console.log("calculated value:"+result);
var endTime = performance.now()
console.log("time taken for memoised operation:");
console.log(endTime-startTime);


 }


    const filterData=(selectedCategory) =>
    {
        const payload ={selectedCategory,products};
        dispatch(filterProducts(payload))
        console.log(products);
    }


    function randomIntBetweenInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
      }
      

//      let buttonRef= useRef();
      //buttonRef.current.

  return (

   
   
    
   

    <div className='side-nav'>
    
   
        <div className='section-title'>
            <h3>Category</h3>
            <p>{stateVar}</p>
            <p>Set number of products: <input type="number" onChange={(e)=>setNumberOfProducts(e.target.value)} />    </p>
            <button   onClick={()=>{setShowProducts(!showProducts)}}> Click to show or hide products</button>
    
            <button onClick={()=>{setStateVar(20)}}>Click me</button>
            <button onClick={()=>{setRecompute(!recompute);getMemoisedValue();}}>Click to recompute value with  toggling </button>
            <button onClick={()=>{getMemoisedValue();}}>Click to recompute value without  toggling </button>
        
            <p>Memoised value is:{memoisedValue}</p>
           
            <button onClick={()=>{dispatch(addItemToProduct({"id":randomIntBetweenInterval(20,100),"product_name":"Torn Tshirt","category_id":7,"product_img":"shop-9.jpg","price":20,"created_on":"2023-10-26 17:02:07"}))}}>Add New Product</button>
            
        </div>


        <div className='accordion my-3'>

        {accordionData.map((eachData)=>{

if(eachData.parent_category_id==null)
 return(
         <div className='accordion-item individual-category'>
          <div className="accordion-header">
            <button id={"but"+eachData.category} className="accordion-button" data-bs-target={'#'+eachData.category} data-bs-toggle="collapse">
            <div className='category-title'>
                {eachData.category}
            </div>
            </button>
            </div>

            {           (accordionData.filter((eachSubCategory)=>eachData.id==eachSubCategory.parent_category_id).length>0) && <div className='accordion-collapse collapse show' id={eachData.category}>

                <div className='accordion-body'>
             
                 <ul>
              {
            
              accordionData.filter((eachSubCategory)=>eachData.id==eachSubCategory.parent_category_id).map((eachItem)=>{

          return <li className='sub-items'><a href='#' onClick={()=>{filterData(eachItem)}}>{eachItem.category}</a></li>
            
              })}
            



                 </ul>



                </div>
            </div>}

            </div> 

        )



        })}
           {/*
            <div className='accordion-item'>
            <div className='category-title'>
                Women
            </div>
            </div>
            <div className='accordion-item'>
            <div className='category-title'>
                Kids
            </div>
            </div>
           */}



        </div>
        <div className="price-filter-container">
         <div className='section-title '>

            <h3> Filter by Price </h3>

         </div>
         <div>
            <label> Min: {minPriceLimit} </label>

            <input type="range"
            className='form-range'
            onChange={(e)=>{setMinPriceLimit(e.target.value)}}
        
            value={minPriceLimit}
            min={10}
            max={130}
            step={10} />

            </div> 
            <div>
             <label> Max: {maxPriceLimit} </label>
            <input type="range"
            min={10}
            value={maxPriceLimit}
          
            onChange={(e)=>{setMaxPriceLimit(e.target.value)}}
            className='form-range'
       
            max={130}
            step={10} />
            </div>
            <div>
            <button className='btn btn-outline-dark  my-3' onClick={()=>{dispatch(filterByPrice({products:products, minPrice:minPriceLimit,maxPrice:maxPriceLimit}))}}> Apply Filter</button>
           

         </div>

 
               </div>
               {value => <p> The watches are  { value } </p>}
 

           
            
    </div>
   
    
  )
}

export default SideNav;