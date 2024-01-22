import axios from "axios";

const api = axios.create({
    baseURL: 'http://3400'

});
export default api;