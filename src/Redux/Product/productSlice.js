
import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actions";

const initialState= {
 products:[],
 status:"idle",
 error:""
}


const productSlice= createSlice({
  name:"Products",
  initialState:initialState,
  reducers: {


   addItemToProduct: (state,action)=> {

      //FSA format => meta,payload
       console.log("addItemToProduct type called is:"+action.type); //unique string
       console.log("addItemToProduct product called is:"+JSON.stringify(action.payload));
       
       
       //state.products

        let products=state.products;

        products.push(action.payload);
        state.products= products;

       }

    
    ,
   filterProducts: (state,action)=>{

  const filteredData= action.payload.products.filter((eachProduct)=>
  { 
  return eachProduct.category_id===action.payload.selectedCategory.id
   })

  state.products=filteredData;
  },

  filterByPrice:(state,action) =>
  {
   let minPrice= action.payload.minPrice;
   let maxPrice = action.payload.maxPrice;
   const filteredData= action.payload.products.filter((eachProduct)=>{

       
      return eachProduct.price >= minPrice && eachProduct.price <= maxPrice;
   })

   state.products=filteredData;

  }
},

  extraReducers:{
   [getProducts.pending]: (state,action)=>{
      state.status="Loading...";
   },
   [getProducts.fulfilled]: (state,action)=>{
      state.status="Success";
      state.products=action.payload;
   },
   [getProducts.rejected]: (state,action)=>{
      state.status="Failed";
      state.error=action.error.message;
   }   
 }



});

export const {filterProducts,filterByPrice,addItemToProduct}= productSlice.actions;
export default productSlice.reducer;
