import axios from 'axios'

const $authHost = axios.create({
    baseURL: 'http://localhost:5000/'
})
