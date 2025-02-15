import axios from "axios";

export const API = axios.create({
    baseURL: 'https://tynybekfood.pythonanywhere.com/api/v1/'
})