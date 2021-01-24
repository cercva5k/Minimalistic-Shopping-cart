import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/'
});

instance.interceptors.request.use((request) => {
    console.log('Request 2', request);
    return request;
}, (error) => {
    console.log("Request 2", error.message);
    Promise.reject(error);
})

instance.interceptors.response.use(response => {
    console.log("Response 2", response);
    return response.data;
}, error => {
    console.log("Response 2", error.message);
   return error;
})

export default instance;