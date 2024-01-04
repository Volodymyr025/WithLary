import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name:'cart',
    initialState:{
        item:[],
        totalItem:0,
        totalPrice:0
    },
    reducers:{
        addItemToCart(){},
        removeItemFromCart(){},
    }
})