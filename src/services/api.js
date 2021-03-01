import axios from 'axios';


const api = axios.create({
    baseURL: 'https://qualicorp-api.herokuapp.com'
})

export default api;