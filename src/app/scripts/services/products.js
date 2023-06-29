import axios from 'axios'
import { endpoints } from './data.js'

export const getProducts = async () => {
    try {
        const {data, status} = await axios.get(endpoints.urlProducts)
        if (status === 200) {
            return data
        }
    } catch (error) {
        console.log(error);
    }
}

export const findProducts = async(keyWord) => {
    try {
        const {data, status} = await axios.get(`${endpoints.urlProducts}&name_like=${keyWord}`);
        if (status === 200) {
            return data
        }
    } catch (error) {
        console.log(error);
    }
}