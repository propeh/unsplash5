import axios from "axios";
import {BASE_API_URL} from "../constants";

const request = (url, method, data) => {

    const config = {
        url: BASE_API_URL + url,
        method,
    }

    if(method === 'get') {
        config.params = data;
    } else {
        config.data = data;
    }

    return axios(config)
}

const API = {
    getPhotos: (data) => request('/photos', 'get', data),
    getTopics: (data) => request('/topics', 'get', data),

}


export default API;