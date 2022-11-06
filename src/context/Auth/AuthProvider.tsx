import { useEffect, useState } from "react"
import { authApi } from "../../services/auth"
import { AuthContext } from "./AuthContext"
import IUser from "./interfaces/IUser"
export const AuthProvider = ({children}:{children:JSX.Element})=>{
    const [user,setUser] = useState<IUser | null>(null)
    const api = authApi();
    
    // useEffect(()=>{
        
    // },[])

    const validateToken = async ()=>{
        const storedToken = localStorage.getItem('token');
        if(storedToken){
            const response = await api.validateToken(storedToken);
            if(response.user){
                setUser(response.user);
            }
            return
        }
        signOut();
        
    }


    const signIn = async (email:string,password:string)=>{

        const data = await api.signIn(email,password);
        if(data.user && data.token){
            setUser(data.user)
            localStorage.setItem('token',data.token)
            return true;
        }
        return false;
    }
     const signOut = async ()=>{
        if(user && localStorage.getItem('token')){
            await api.logout();
            localStorage.removeItem('token');
            setUser(null);
        }
    }

    return (
        <AuthContext.Provider value={{user,signIn,signOut,validateToken}}>
            {children}
        </AuthContext.Provider>
    )
}