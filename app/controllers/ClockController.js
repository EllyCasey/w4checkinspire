import { setText } from "../utils/Writer.js"


export class ClockController {

    constructor() {
        console.log('Clock Controller is Loaded')
        this.getClock()
        setInterval(this.getClock, 1000)


    }

    getClock() {
        setText('clock', new Date().toLocaleString("en-US", { hour: '2-digit', minute: "2-digit", hour12: true }))
    }

}