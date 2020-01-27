import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../stores/bikeReducer";
import { getPosition, getBike } from "../actions/bikeActions";
import { useCallback } from "react";

export default function useScore() {
  const position = useSelector((state: RootState) => state.position);
  const bikes = useSelector((state: RootState) => state.bikeList);
  const dispatch = useDispatch();

  const onGetPosition = useCallback(pos => dispatch(getPosition(pos)), [
    dispatch
  ]);

  const onGetBikes = useCallback(bikes => dispatch(getBike(bikes)), [dispatch]);

  return { position, bikes, onGetPosition, onGetBikes };
}
