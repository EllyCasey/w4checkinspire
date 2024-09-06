import { AppState } from "../AppState.js"
import { BgImage } from "../models/BgImage.js"
import { bgImagesService } from "../services/bgImagesService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

export class bgImagesController {
    constructor() {
        console.log('bg Images Controller loaded')
        AppState.on('bgImage', this.drawBgImageInfo)
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

    drawBgImageInfo() {
        const bgImageInfo = AppState.bgImage
        setHTML('bg-details', bgImageInfo.bgImageDetailsHTMLTemplate)

        document.body.style.backgroundImage = `url(${bgImageInfo.imgUrl})`
    }

}