import axios from "axios";

const API_SERVER_ADDRESS = process.env.REACT_APP_API_SERVER_ADDRESS

const axiosServices = axios.create({
    baseURL: API_SERVER_ADDRESS,
    // For Cookies Send and Receive
    withCredentials: true
});

export default axiosServices;