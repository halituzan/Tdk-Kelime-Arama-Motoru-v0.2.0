import axios from "axios";
import tdkAllApi from "tdk-all-api";
import {
  getFavWord,
  getTdk,
  getTdkFailure,
  getTdkSuccess,
} from "./sozlukSlice";

export function fetchTdkSearching(searching) {
  return async (dispatch) => {
    dispatch(getTdk());
    try {
      const data = await tdkAllApi(searching, "/api/");
      dispatch(getTdkSuccess(data));
    } catch (error) {
      dispatch(getTdkFailure());
    }
  };
}
console.log(tdkAllApi);
export function fetchTdk(num) {
  return async (dispatch) => {
    dispatch(getTdk());
    try {
      const { data } = await axios.get(`/gts_id?id=${num}`);
      dispatch(getTdkSuccess(data[0]));
    } catch (error) {
      dispatch(getTdkFailure());
    }
  };
}

export function fetchTdkFav(num) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/gts_id?id=${num}`);
      dispatch(getFavWord(data));
    } catch (error) {
      console.log(error);
    }
  };
}
