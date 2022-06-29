import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Country from "models/Country";
import { build } from "@reduxjs/toolkit/dist/query/core/buildMiddleware/cacheLifecycle";
import { buildQueries } from "@testing-library/react";

const service = createApi({
  reducerPath: "serviceApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),
  endpoints: (builder) => ({
    getCountries: builder.query<Country[], void>({
      query: () => ({ url: "/all" }),
    }),
    getCountry: builder.query<{ 0: Country }, { name: string }>({
      query: ({ name }) => ({ url: `/name/${name}?fullText=true` }),
    }),
  }),
});

export const { useGetCountriesQuery, useGetCountryQuery } = service;
export default service;
