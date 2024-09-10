

export class Weather {

    constructor(data) {
        this.temp = data.main.temp
        this.tempShown = 1
    }

    get weatherHTMLTemplate() {
        return /*html*/ `
            <div>
                <p onclick='app.WeatherController.hoverTempDisplay()'><i class="mdi mdi-weather-partly-snowy-rainy"></i>${this.tempHover}</p>
            </div>
        `
    }


    get degreesFahrenheit() {
        return `${((this.temp - 273.15) * (9 / 5) + 32).toFixed(0)}° F`

    }
    get degreesCelsius() {
        return `${(this.temp - 273.15).toFixed(0)}° C`
    }

    get degreesKelvin() {
        return `${this.temp.toFixed(0)}° K`
    }

    get tempHover() {
        if (this.tempShown == 0) return this.degreesKelvin
        if (this.tempShown == 1) return this.degreesFahrenheit
        if (this.tempShown == 2) return this.degreesCelsius
    }

}