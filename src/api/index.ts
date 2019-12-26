import axios from 'axios'
import { IBike } from '../shared-interfaces'

const URL = `${process.env.REACT_APP_BIKE_API_URL}`

// const URL = ""


const api = axios.create({
    baseURL: URL,
    timeout: 5000,
})


export const bikeApi = {
    getAllBikes: async (): Promise<IBike[]> => {
        const res = await api.get("/api/bikes")
        return res.data
    }
}