import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'

const httpClient = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://www.mosdac.gov.in/apiweather1/',
    withCredentials: true,
})

export default httpClient
