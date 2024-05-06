import { createSlice } from "@reduxjs/toolkit";

//slices for creating, to divide the specific slice from whole state.
//this is slice function for customers data

const initialState = [];
//empty array for customer view data

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers:{
        //property, which contains functions for managing the changes
        addCustomer(state, action){
            state.push(action.payload)
            //payload is a field to hold the accessed data
        },
        deleteCustomer(state, action){
            const deleteIndex = action.payload
            return state.filter((val, index) => index !== deleteIndex)
        }
    }
    //properties
})

export const {addCustomer} = customerSlice.actions
export default customerSlice.reducer
export const {deleteCustomer} = customerSlice.actions