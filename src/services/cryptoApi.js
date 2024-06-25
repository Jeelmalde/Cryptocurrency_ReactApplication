import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
	"X-RapidAPI-Key": "63fc668149mshbfacc2f21ee1412p1145dcjsn48cf7a88656d",
	"X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};
const createRequest = url => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
	reducerPath: "cryptoApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://coinranking1.p.rapidapi.com",
	}),
	endpoints: builder => ({
		getCryptos: builder.query({
			query: count => createRequest(`/coins?limit=${count}`),
		}),

		getCryptoDetails: builder.query({
			query: coinId => createRequest(`/coin/${coinId}`),
		}),

		getCryptoHistory: builder.query({
			query: ({ coinId, timeperiod }) =>
				createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
		}),

		getExchanges: builder.query({
			query: () => createRequest("/exchanges"),
		}),
	}),
});

export const {
	useGetCryptosQuery,
	useGetCryptoDetailsQuery,
	useGetExchangesQuery,
	useGetCryptoHistoryQuery,
} = cryptoApi;
