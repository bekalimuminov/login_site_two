import axios from 'axios';

const token = localStorage.getItem('token');

const customApi = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL,
});


export default customApi