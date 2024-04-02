

import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../Category/categorySlice";
import productSlice from "../Product/productSlice";
import cartSlice from "../Cart/cartSlice";


export const store = configureStore({

    //event emitter pub-sub pattern RXJS
    //ssot pattern Redux=> event emitter/pub-sub
    //soc =>separation of concerns 
    reducer:{
        categoryReducer:categorySlice,
        productReducer: productSlice,
        cartReducer: cartSlice
        //authReducer: authSlice =>authentication of the user in the estore
        //try implementing authReducer in this code using the same principles
    }


})

