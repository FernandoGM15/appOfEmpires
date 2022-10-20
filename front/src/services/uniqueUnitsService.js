import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const uniqueUnitApi = createApi({
    reducerPath: "uniqueUnitsApi",

    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api/unique-units/" }),
    tagTypes: ["uniqueUnits"],
    endpoints: (builder) => ({

        getUniqueUnits: builder.query({
            query: () => "/",
            providesTags: ["uniqueUnits"]
        }),
        showUniqueUnit: builder.query({
            query: (id) => `/${id}`,
            providesTags: ["uniqueUnits"]
        }),
        storeUniqueUnit: builder.mutation({
            query: (uniqueUnit) => ({
                url: "/",
                method:"PUT",
                body: uniqueUnit
            }),
            invalidatesTags: ["uniqueUnits"]
        }),
        updateUniqueUnit: builder.mutation({
            query:(id)=> ({
                url:`/${id}`
            }),
            invalidatesTags: ["uniqueUnits"]
        }),
        deleteUniqueUnit: builder.mutation({
            query: (id)=>({
                url: `/${id}`,
                method:"DELETE"
            }),
            invalidatesTags: ["uniqueUnits"]
        })
    })
})

export const {
    useGetUniqueUnitsQuery,
    useShowUniqueUnitQuery,
    useStoreUniqueUnitMutation,
    useUpdateUniqueUnitMutation,
    useDeleteUniqueUnitMutation
} = uniqueUnitApi;