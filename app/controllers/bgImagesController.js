import { AppState } from "../AppState.js"
import { bgImagesService } from "../services/bgImagesService.js"
import { Pop } from "../utils/Pop.js"

export class bgImagesController {
    constructor() {
        console.log('bg Images Controller loaded')
        this.getBgImage()
    }

    async getBgImage() {
        try {
            await bgImagesService.getBgImage()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

}