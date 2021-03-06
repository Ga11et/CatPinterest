import FavouriteCatsReducer from './reducers/favoriteCatReducer';
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { catsAPI } from './servises/api';



const rootReduser = combineReducers({
  FavouriteCatsReducer,
  [catsAPI.reducerPath]: catsAPI.reducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReduser,
        middleware: (getDefaultMiddleware) => {
          return getDefaultMiddleware().concat(catsAPI.middleware)
        }
    })
}

export type RootState = ReturnType<typeof rootReduser>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
