import * as constraints from "../actions/constraints";
import { BikeAction } from "../actions/bikeActions";
import { IBike, IPoints } from "../../shared-interfaces";

interface IState {
  bikeList: IBike[] | IPoints;
  position: IPoints | IBike[];
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
    case constraints.GET_BIKE:
      return { ...state, bikeList: action.payload };
    case constraints.GET_POSITION:
      return { ...state, position: action.payload };
    default:
      return state;
  }
};

export default bikeReducer;
export type RootState = ReturnType<typeof bikeReducer>;
