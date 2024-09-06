
export class BgImage {
    constructor(data) {
        this.author = data.author
        this.imgUrl = data.largeImgUrl
    }

    get bgImageDetailsHTMLTemplate() {
        return /*html*/ `
            <div class="row">
                <div class="col-4">
                    <h3 class="ms-3 fs-4">${this.author}</h3>
                </div>
            </div>
        `
    }
}



// const data = {
//     "imgUrl": "https://pixabay.com/get/ga63a526d535a12a10175d0b7b3fbe08ce5f7e2d76675dae6445493aa5ef68d2b6073cc9a5a9bebe2bba08b57b8a1c3d8af8bc37b0736323152503bf80a62adcb_640.jpg",
//     "largeImgUrl": "https://pixabay.com/get/g2e3ea88762fa3d839be4b621dd66438cef5a6cf3d3f4210cb0bde95e35a9b0e023e74bb987a921665d86a298a128e36302a69025d69b9a02b13c63dec71f1f86_1280.jpg",
//     "tags": "polar lights, desktop backgrounds, sky background",
//     "author": "CharlVera",
//     "query": "space",
// }
