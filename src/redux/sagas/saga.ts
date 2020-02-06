import { takeLatest, put, all, takeEvery } from "redux-saga/effects";
import * as constants from "../actions/constants";
import { bikeApi } from "../../api";
import { IPoints, IMapBounds } from "../../shared-interfaces";

function* getBikesAsync(points: IPoints, mapBounds: IMapBounds) {
  // let intSize = Math.round(size);
  const { x1, x2, y1, y2 } = mapBounds;

  const res = yield bikeApi.getAllBikes({
    x1,
    x2,
    y1,
    y2
  });
  // console.log(
  //   "data",
  //   res,
  //   "x: ",
  //   centerX,
  //   "y: ",
  //   centerY,
  //   "intSize: ",
  //   intSize
  // );
  yield put({ type: constants.GET_BIKE_ASYNC, payload: res.data });
}

function* getPositionAsync(x: string, y: string) {
  if (!x || !y) {
    const pos = yield new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        location => resolve(location.coords),
        error => reject(error)
      );
    });

    x = pos.longitude;
    y = pos.latitude;
  }
  // console.log("pos", x, y);
  yield put({ type: constants.GET_POSITION_ASYNC, payload: { x, y } });
}

// Watch
function* watchGetPosition() {
  yield takeLatest(constants.GET_POSITION, (action: any) =>
    getPositionAsync(action.payload.x, action.payload.y)
  );
}

function* watchGetBikes() {
  // const action = yield take(constants.GET_BIKE);
  yield takeLatest(constants.GET_BIKE, (action: any) =>
    getBikesAsync(action.payload.points, action.payload.mapBounds)
  );
}

// RootSaga
export default function* rootSaga() {
  yield all([watchGetPosition(), watchGetBikes()]);
}
