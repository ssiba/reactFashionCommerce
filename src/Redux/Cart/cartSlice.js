import { createSlice } from "@reduxjs/toolkit";


const initialState= {
 cartItems:[],
 totalItemsPrice:0,
 totalItems:0,
 totalQuantity:0
}

const cartSlice = createSlice({
   name:"cartSlice",
   initialState:initialState,
   reducers:{

    addCartItem: (state,action)=> {

      //FSA format => meta,payload
       console.log("Action type called is:"+action.type); //unique string
       console.log("Action product called is:"+JSON.stringify(action.payload));
       
       
        let item_exists= state.cartItems.find(item=> item.id === action.payload.id);

        
      
        console.log("existing item is:"+item_exists);
        if(!item_exists)
        {

     //  state.var1= "blah blah";
        state.cartItems= [...state.cartItems,action.payload];
       state.totalQuantity = ++state.totalQuantity;
       
       state.totalItemsPrice = state.totalItemsPrice + action.payload.price;
       
        state.totalItems = ++state.totalItems;
       
       }

       else //if item already exists
        {

         let newCartItems=[];
         for(let i=0;i< state.cartItems.length;i++)
         {
         
            let element = state.cartItems[i];
            if(element.id==action.payload.id)
            {

                element.quantity =element.quantity+1;
            }
            newCartItems.push(element);
         }
         state.cartItems=newCartItems;
         state.totalQuantity = ++state.totalQuantity;
       state.totalItemsPrice = state.totalItemsPrice + action.payload.price;
        state.totalItems = ++state.totalItems;
       

       }

    
    },
    deleteCartItem: (state,action)=> {
        let item_index= action.payload.key;
       
        if(item_index!=-1)
        {

       
        state.cartItems.splice(item_index,1);
       state.totalQuantity = --state.totalQuantity;
       
       state.totalItemsPrice = state.totalItemsPrice - (action.payload.quantity*action.payload.price);
       
        state.totalItems = --state.totalItems;
       
       }
    
    },

    
    updateCartItemQuantity:(state,action )=>{


        let index = action.payload.key;
        
        if(action.payload.operator=='+' )
        {
          ++state.cartItems[index].quantity;
          state.totalQuantity = ++state.totalQuantity;
       
          state.totalItemsPrice = state.totalItemsPrice + action.payload.item.price;
        
        }
        else 
        {
        if(state.cartItems[index].quantity >1)
        {
             --state.cartItems[index].quantity;
             state.totalQuantity = --state.totalQuantity;
       
             state.totalItemsPrice = state.totalItemsPrice - action.payload.item.price;
           
             
        }
        }
        
    }

   }

})


//in actions, an action is created for the exported reducer=>addCartItem and its value is cartSlice/addCartItem
export const {addCartItem, deleteCartItem,updateCartItemQuantity}=cartSlice.actions;
export default cartSlice.reducer;