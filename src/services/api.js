import axios from "axios";
const api = axios.create({
    baseURL: 'https://backend-portalturismo-5ao1.onrender.com/api'
})
export default api;