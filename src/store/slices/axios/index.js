import axios from 'axios'

const instanceConfig = {
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json',
    },
}

const api = axios.create(instanceConfig)
export default api

api.interceptors.request.use((config) => {
    let token = localStorage.getItem('token')

    if (token) {
        config.headers.Authorization = localStorage.getItem('token')
    }

    return config
})
