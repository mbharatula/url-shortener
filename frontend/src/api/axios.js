import axios from "axios";
import 'dotenv/config'

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}`
});

export default api;