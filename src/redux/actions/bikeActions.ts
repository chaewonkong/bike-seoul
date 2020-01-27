import { GET_BIKE, GET_POSITION } from "./constraints";
import { IBike, IPoints } from "../../shared-interfaces";

export const getBike = (payload: IBike[]) => {
  return { type: GET_BIKE, payload: [...payload] };
};

export const getPosition = (payload: IPoints) => {
  return { type: GET_POSITION, payload };
};

export type BikeAction =
  | ReturnType<typeof getBike>
  | ReturnType<typeof getPosition>;
