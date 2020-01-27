import { GET_BIKE, GET_POSITION } from "./constants";
import { IBike, IPoints } from "../../shared-interfaces";

export const getBike = (points: IPoints) => {
  return { type: GET_BIKE, payload: points };
};

export const getPosition = () => {
  return { type: GET_POSITION, payload: { x: "", y: "" } };
};

export type BikeAction =
  | ReturnType<typeof getBike>
  | ReturnType<typeof getPosition>;
