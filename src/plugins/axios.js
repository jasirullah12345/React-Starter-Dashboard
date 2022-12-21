import axios from "axios";

const API_SERVER_ADDRESS = process.env.REACT_APP_API_SERVER_ADDRESS

export const $axios = axios.create({
    baseURL: API_SERVER_ADDRESS + "v1",
    // For Cookies Send and Receive
    withCredentials: true
});