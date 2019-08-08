import Axios from "axios";
const baseUrl = require('./setting').getBaseUrl()

export async function updateImageMetadata(artId, params) {
    return Axios.post(baseUrl + 'public/updateImage/' + artId, params)
}

export async function fetchImageMetadata(artId, params) {
    return Axios.get(baseUrl + 'public/image/metadata/' + artId, params)
}

export async function fetchArt(artId) {
    return Axios.get(baseUrl + "public/image/" + artId);
}

export async function fetchArtList(params) {
    return Axios.post(baseUrl + "public/imageList/", params)
}