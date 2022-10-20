import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { civilizationApi } from "../services/civilizationService";
import { uniqueUnitApi } from "../services/uniqueUnitsService";
// import civilizationReducer from "../features/civilizationsSlice";

export const store = configureStore({
    reducer: {
        // civilizations: civilizationReducer
        [civilizationApi.reducerPath]: civilizationApi.reducer,
        [uniqueUnitApi.reducerPath]: uniqueUnitApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(
            civilizationApi.middleware,
            uniqueUnitApi.middleware
        );
    }
});

setupListeners(store.dispatch);