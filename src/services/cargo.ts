import { api } from "../hooks/useApi"

export const cargoPost = async (input:{name: string, cor: string}) => {
    if (!input.name || !input.cor) return 
    
    return await api.post('/cargo/store', input).then((response) => response.data.result);
}

export const cargoGetAll = async () => {
    return await api.get('/cargo/getAll')
}

export const cargoDelete = async (id: string) => {
    if(!id) return
    return await api.delete(`/cargo/delete/${id}`)
}
