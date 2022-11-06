import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const useApi = () => ({
    validateToken: async (token:string)=>{
        // const response = await api.post('/auth/validateToken',{token});
        // return response.data;
        return {user:{id:'3',name:'Jose Alves',email:'josealves@gmail.com'}}
    },
    signIn: async (email:string,password:string)=>{
        // const response = await api.post('/auth/signin',{email,password});

        return {
            user: {id:'3',name:'Jose Alves',email:'josealves@gmail.com'},
            token: '123456789'
        }
        // return response.data;
    },
    logout: async ()=>{

        // const response = await api.post('/auth/logout');
        // return response.data;
        return {status:true}
    }
})