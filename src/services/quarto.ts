import { api } from "../hooks/useApi"

export const quartoPost = async (quarto: number) => {
    if (quarto <= 0) return 
    
    return await api.post('/quarto/store', {bedroom: quarto}).then((response) => response.data.result);
}

export const quartoGetAll = async () => {
    return await api.get('/quarto/getAll')
}

export const quartoDelete = async (id: string) => {
    if(!id) return

    return await api.delete(`/quarto/delete/${id}`)
}
