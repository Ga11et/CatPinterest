import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatType } from "../models/models";

type CatReducerInitialValuesType = {
    isLoading: boolean
    cats: CatType[]
}

const initialState: CatReducerInitialValuesType = {
   isLoading: false,
   cats: []
}

export const CatReducer = createSlice({
    name: 'catReducer',
    initialState,
    reducers: {
        catsFetching(state) {
            state.isLoading = true
        },
        catsFetchingSuccess(state, action: PayloadAction<CatType[]>) {
            state.isLoading = false
            state.cats = [...state.cats, ...action.payload]
        }
    },
})

export default CatReducer.reducer