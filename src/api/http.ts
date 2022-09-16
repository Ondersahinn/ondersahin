
import axios from 'axios'

let instance = axios.create({})

instance.interceptors.request.use((config) => {
    const apiToken = typeof localStorage !== 'undefined' && localStorage.getItem('access_token')
    config.headers = {
        Authorization: `Bearer ${apiToken}`
    }
    return config
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
    return response;
}, error => {

    if (error.response.status === 401) {
        typeof localStorage !== 'undefined' && localStorage.clear()
    }
    if (error.response) {
        return error.response.data;
    } else {
        return Promise.reject(error)
    }
})

export const http = instance