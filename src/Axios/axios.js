import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

instance.interceptors.request.use((request) => {
    console.log('Request', request);
    return request;
}, (error) => {
    console.log("Request", error.message);
    Promise.reject(error);
})

instance.interceptors.response.use(response => {
    console.log("Response", response);
    return response.data;
}, error => {
    console.log("Response", error.message);
    Promise.reject(error);
})

export default instance;