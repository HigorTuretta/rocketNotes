import axios from 'axios';

export const api = axios.create({
    baseURL: "https://prcnotes-api.onrender.com/"
})

