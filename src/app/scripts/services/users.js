import axios from "axios"
import { endpoints } from "./data"

export const getUser = async(user, password) => {
    
    try {
        const {data} = await axios.get(`${endpoints.urlUsers}?user=${user}&password=${password}`);
        console.log(data);
        return data; 

    } catch (error) {
        console.log(error)
        return [];
    }
   
}