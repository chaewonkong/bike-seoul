import { takeLatest, put, all, take } from "redux-saga/effects";
import * as constants from "../actions/constants";
import { bikeApi } from "../../api";
import { IPoints } from "../../shared-interfaces";

function* getBikesAsync(points: any) {
  const centerX = points.x;
  const centerY = points.y;

  const res = yield bikeApi.getAllBikes({ polySize: 3000, centerX, centerY });
  yield put({ type: constants.GET_BIKE_ASYNC, payload: res.data });
}

function* getPositionAsync() {
  const pos = yield new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      location => resolve(location.coords),
      error => reject(error)
    );
  });

  const x = pos.longitude;
  const y = pos.latitude;

  //   console.log("pos", x, y);
  yield put({ type: constants.GET_POSITION_ASYNC, payload: { x, y } });
}

function* watchGetPosition() {
  yield takeLatest(constants.GET_POSITION, getPositionAsync);
}

function* watchGetBikes() {
  // const action = yield take(constants.GET_BIKE);
  yield takeLatest(constants.GET_BIKE, (action: any) =>
    getBikesAsync(action.payload)
  );
}

export default function* rootSaga() {
  yield all([watchGetPosition(), watchGetBikes()]);
}
