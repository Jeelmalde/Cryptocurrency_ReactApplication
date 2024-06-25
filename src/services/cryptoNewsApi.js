import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
	"X-RapidAPI-Key": "63fc668149mshbfacc2f21ee1412p1145dcjsn48cf7a88656d",
	"X-RapidAPI-Host": "cryptocurrency-news2.p.rapidapi.com",
};

const createRequest = url => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
	reducerPath: "cryptoNewsApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://cryptocurrency-news2.p.rapidapi.com/v1",
	}),
	endpoints: builder => ({
		getCryptoNews: builder.query({
			query: ({ count }) => createRequest(`/coindesk?count=${count}`),
		}),
	}),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
