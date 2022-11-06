import { toast } from "react-toastify"
import IAlert from "./interfaces/IAlert"

const configAlert:object = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
}
export default function Alert ({type,message}:IAlert){
    
    switch (type) {
        case 'success':
            return toast.success(message,configAlert)
        case 'error':
            return toast.error(message,configAlert)
        case 'warning':
            return toast.warn(message,configAlert)
        case 'info':
            return toast.info(message,configAlert)
        default:
            return toast(message,configAlert)
    }
}