import axios from "axios";


const backendUrl = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
    baseURL : backendUrl,
    withCredentials:true
});


api.interceptors.response.use(
    (responce)=>responce,
    async (error)=>{
        const ogRequest = error.config;

        if(error.response?.status === 403 && !ogRequest._retry){
            ogRequest._retry = true


        try {
            await api.get('/auth/refresh');
            return api(ogRequest);
        } catch (error) {
            console.error("Refresh token failed",error)
        }

        }
       return Promise.reject(error)
    }

    
)


export default api;

