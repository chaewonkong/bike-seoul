import axios from "axios";
import { IBike } from "../shared-interfaces";
import { IMapBounds } from "../shared-interfaces";

const URL = `${process.env.REACT_APP_BIKE_API_URL}`;
const LOCAL_URL = "http://localhost:3004";

const api = axios.create({
  baseURL: URL,
  timeout: 5000
});

export const bikeApi = {
  getAllBikes: async ({ x1, x2, y1, y2 }: IMapBounds): Promise<IBike[]> => {
    const res = await api.get(`/api/bikes?x1=${x1}&x2=${x2}&y1=${y1}&y2=${y2}`);
    return res.data;
  }
};
