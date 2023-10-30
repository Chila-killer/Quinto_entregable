import { configureStore } from "@reduxjs/toolkit";
import trainerNameSlice from "./slices/trainerName.slice";
import itemsPerBlockSlice from "./slices/itemsPerBlock.slice";

export default configureStore({
    reducer: {
       trainerName: trainerNameSlice,
       itemsPerBlock: itemsPerBlockSlice 
    }
})