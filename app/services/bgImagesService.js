import { api } from "./AxiosService.js";


class BgImagesService {
    async getBgImage() {
        const response = await api.get('api/images')
        console.log('bgImages Service loaded', response.data)
    }
}

export const bgImagesService = new BgImagesService()