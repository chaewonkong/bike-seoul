import {
  GET_BIKE,
  GET_POSITION,
  GET_BIKE_ASYNC,
  GET_POSITION_ASYNC
} from "./constants";
import { IBike, IPoints, IMapBounds } from "../../shared-interfaces";

export const getBike = (points: IPoints, mapBounds: IMapBounds) => {
  console.log("size got: ", mapBounds);
  return { type: GET_BIKE, payload: { points, mapBounds } };
};

export const getPosition = (x: string, y: string) => {
  return { type: GET_POSITION, payload: { x, y } };
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
