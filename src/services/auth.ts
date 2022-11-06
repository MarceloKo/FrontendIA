export const authApi = () => ({
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