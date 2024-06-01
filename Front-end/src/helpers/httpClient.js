import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'
const httpClient = axios.create({
    baseURL: 'http://localhost:3000/',
    withCredentials: true,
})

export default httpClient
