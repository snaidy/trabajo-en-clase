import axios from 'axios'
import { endpoints } from './data.js'

export const getCategories = async () => {
    const {data, status} = await axios.get(endpoints.urlCategories)
    if (status === 200) {
        return data
    }
}