import * as constants from "../actions/constants";
import { BikeAction } from "../actions/bikeActions";
import { IBike, IPoints } from "../../shared-interfaces";

interface IState {
  bikeList: IBike[] | IPoints;
  position: IPoints;
}

const INITIAL_STATE: IState = {
  bikeList: [],
  position: {
    x: "",
    y: ""
  }
};

const bikeReducer = (state = INITIAL_STATE, action: BikeAction) => {
  switch (action.type) {
    case constants.GET_BIKE_ASYNC:
      return { ...state, bikeList: action.payload };
    case constants.GET_POSITION_ASYNC:
      let newPos: IPoints = action.payload;
      return { ...state, position: newPos };
    default:
      return state;
  }
};

export default bikeReducer;
export type RootState = ReturnType<typeof bikeReducer>;
