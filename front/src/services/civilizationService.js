import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const civilizationApi = createApi({
    reducerPath: "civilizationApi",

    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),

    tagTypes:["Civilization"],

    endpoints: (builder) => ({

        getCivilizations: builder.query({
            query: () => 'civilizations',
            providesTags:["Civilization"]
        }),

        showCivilization: builder.query({
            query: (id) => `civilizations/${id}`,
            providesTags:["Civilization"]
        }),

        storeCivilization: builder.mutation({
            query: (civilization) => ({
                url: "civilizations",
                method: "POST",
                body: civilization
            }),
            invalidatesTags:["Civilization"]
        }),

        updateCivilization: builder.mutation({
            query: (civilization) => ({
                url: `civilizations/${civilization._id}`,
                method: "PUT",
                body: civilization
            }),
            invalidatesTags:["Civilization"]
        }),
        
        deleteCivilization: builder.mutation({
            query: (id) => ({
                url: `civilizations/${id}`,
                method: "DELETE",
            }),
            invalidatesTags:["Civilization"]
        })
    })
})

export const { 
    useGetCivilizationsQuery, 
    useStoreCivilizationMutation, 
    useDeleteCivilizationMutation, 
    useShowCivilizationQuery,
    useUpdateCivilizationMutation
} = civilizationApi;