import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { civilizationApi } from "../services/civilizationService";
// import civilizationReducer from "../features/civilizationsSlice";

export const store = configureStore({
    reducer: {
        // civilizations: civilizationReducer
        [civilizationApi.reducerPath]:civilizationApi.reducer
    },
    middleware:(getDefaultMiddleware)=>{
       return getDefaultMiddleware().concat(civilizationApi.middleware);
    }
});

setupListeners(store.dispatch);