import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CatType } from "../models/models";

type FavouriteCatsReducerInitialValuesType = {
    cats: CatType[]
}

const initialState: FavouriteCatsReducerInitialValuesType = {
    cats: [] as CatType[],
}

export const FavouriteCatsReducer = createSlice({
    name: 'favouriteCatsReducer',
    initialState,
    reducers: {
        catAdding(state, action: PayloadAction<CatType>) {
            state.cats = [...state.cats, action.payload]
        },
        catDeleting(state, action: PayloadAction<CatType>) {
            state.cats = state.cats.filter(el => el.id != action.payload.id)
        }
    },
})

export default FavouriteCatsReducer.reducer