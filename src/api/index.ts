import axios from 'axios'
import { IBikeRes } from '../shared-interfaces'

const URL = "https://www.bikeseoul.com/app/station/getStationRealtimeStatus.do?stationGrpSeq=ALL"
// const URL = ""

const api = axios.create({
    baseURL: URL,
    timeout: 1000,
})

export const bikeApi = {
    getAllBikes: async (): Promise<IBikeRes> => {
        const res: IBikeRes = await api.get("")
        console.log(res)
        return res
    }
}