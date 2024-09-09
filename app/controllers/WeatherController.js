
import { AppState } from "../AppState.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"


export class WeatherController {

    constructor() {
        console.log('Weather Controller is loaded')
        AppState.on('weather', this.drawWeather)
        this.getWeather()
    }

    async getWeather() {
        try {
            await weatherService.getWeather()
        } catch (error) {
            Pop.error(error)
            console.error(error)

        }
    }

    drawWeather() {
        let weather = AppState.weather
        setHTML('weather', weather.weatherHTMLTemplate)
    }

    hoverTempDisplay() {
        weatherService.hoverTempDisplay()
    }
}