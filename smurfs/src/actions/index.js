/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from "axios";
export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_START";
export const FETCH_SMURFS_FAILURE = "FETCH_SMURFS_START";

export const ADD_SMURFS_START = "ADD_SMURFS_START";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_START";
export const ADD_SMURFS_FAILURE = "ADD_SMURFS_START";

export const getSmurfs = () => dispatch => {
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("https://http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("ERROR:", err.response);
      dispatch({
        type: FETCH_SMURFS_FAILURE,
        payload: "FETCH FAILED"
      });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURFS_START });
  axios //may need return here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    .post("https://http://localhost:3333/smurfs", smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("ERROR:", err.response);
      dispatch({
        type: ADD_SMURFS_FAILURE,
        payload: "ADD FAILED"
      });
    });
};
