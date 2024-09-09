import { AppState } from "../AppState.js"
import { quotesService } from "../services/QuotesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class QuotesController {
    constructor() {
        console.log('Quotes Controller is Loaded')
        AppState.on('quote', this.drawQuoteInfo)
        this.getQuote()

    }

    async getQuote() {
        try {
            await quotesService.getQuote()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    drawQuoteInfo() {
        const QuoteInfo = AppState.quote
        setHTML('quote-info', QuoteInfo.quoteHTMLTemplate)
    }
}