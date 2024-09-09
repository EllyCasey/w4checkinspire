import { AppState } from "../AppState.js";
import { Weather } from "../models/Weather.js";
import { api } from "./AxiosService.js";

class WeatherService {
    async getWeather() {
        const response = await api.get('api/weather')
        console.log('Weather service is loaded', response.data)
        const weather = new Weather(response.data);
        AppState.weather = weather
    }

    hoverTempDisplay() {
        const weather = AppState.weather
        weather.tempShown++
        if (weather.tempShown > 2) weather.tempShown *= 0
        AppState.emit('weather')
        console.log(weather.tempShown);
    }
}

export const weatherService = new WeatherService()