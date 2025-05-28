import { $axios } from "../api"
import Cookies from "js-cookie"
import { TOKEN } from "../app.constants"

class AuthService {
 async main(email, password, type){
    try {
        
        const {data} = await $axios.post(`/auth/${type}`, {
            email,
            password
        })

        if(data.token) Cookies.set(TOKEN, data.token)
        
            return data
    } catch (error) {
        console.error("Ошибка при запросе на сервер:", error.response ? error.response.data : error.message);
        throw error;
    }
 }
}

export default new AuthService