import axios from 'axios';

const api = axios.create({
    baseURL: process.env.API_AXIOS,
});

export const useApi = () => ({
    validateToken: async (token:string)=>{
        const response = await api.post('/auth/validateToken',{token});
        return response.data;
    },
    signIn: async (email:string,password:string)=>{
        const response = await api.post('/auth/signin',{email,password});
        return response.data;
    },
    logout: async ()=>{
        const response = await api.post('/auth/logout');
        return response.data;
    }
})