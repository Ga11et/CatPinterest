
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CatType } from '../models/models'

export const catsAPI = createApi({
    reducerPath: 'catsAPI',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.thecatapi.com/v1/images/' }),
    endpoints: ( builder ) => ({
        fetchAllCats: builder.query<CatType[], number>({
            query: (limit = 15) => ({
                url: '/search',
                params: {
                    limit: limit,
                    order: 'desc'
                }
            }),
        }),
        fetchMoreCats: builder.mutation<CatType[], number>({
            query: (limit = 15) => ({
                url: '/search',
                params: {
                    limit: limit,
                    order: 'desc'
                }
            }),
        })
    })
})