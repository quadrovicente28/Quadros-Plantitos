import axios from "axios";

export default axios.create({
    baseURL: 'https://dhen.tech/api/',
    // baseURL: 'http://localhost/q-plantitos-laravel/api/',
    withCredentials: false,

});