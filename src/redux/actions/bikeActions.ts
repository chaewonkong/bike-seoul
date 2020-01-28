import {
  GET_BIKE,
  GET_POSITION,
  GET_BIKE_ASYNC,
  GET_POSITION_ASYNC
} from "./constants";
import { IBike, IPoints } from "../../shared-interfaces";

export const getBike = (points: IPoints) => {
  return { type: GET_BIKE, payload: points };
};

export const getPosition = () => {
  return { type: GET_POSITION, payload: { x: "", y: "" } };
};

interface IGetBikeAction {
  type: typeof GET_BIKE | typeof GET_BIKE_ASYNC;
  payload: IBike[];
}

interface IGetPositionAction {
  type: typeof GET_POSITION | typeof GET_POSITION_ASYNC;
  payload: IPoints;
}

export type BikeAction = IGetBikeAction | IGetPositionAction;
