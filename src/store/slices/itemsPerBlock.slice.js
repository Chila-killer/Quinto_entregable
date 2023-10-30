import { createSlice } from "@reduxjs/toolkit";

const itemsPerBlockSlice = createSlice({
    name: "itemsPerBlock",
    initialState: "18",
    reducers: {
        setItemsPerBlock: (state, action) => {
            const newItemsPerBlock = action.payload
            return newItemsPerBlock
        }
    }
})

export const {setItemsPerBlock} = itemsPerBlockSlice.actions
export default itemsPerBlockSlice.reducer