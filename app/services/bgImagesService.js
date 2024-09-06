import { AppState } from "../AppState.js";
import { BgImage } from "../models/BgImage.js";
import { api } from "./AxiosService.js";


class BgImagesService {
    async getBgImage() {
        const response = await api.get('api/images')
        console.log('bgImages Service loaded', response.data)
        const bgImage = new BgImage(response.data);
        AppState.bgImage = bgImage
    }
}

export const bgImagesService = new BgImagesService()