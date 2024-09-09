import { AppState } from "../AppState.js";
import { Quote } from "../models/Quote.js";
import { api } from "./AxiosService.js";


class QuotesService {
    async getQuote() {
        const response = await api.get('api/quotes')
        console.log('Quotes Service loaded', response.data)
        const quote = new Quote(response.data);
        AppState.quote = quote
    }
}

export const quotesService = new QuotesService()