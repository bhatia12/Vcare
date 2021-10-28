import { GET_SUCCESS, GET_ERRORS } from "../actions/types";
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_SUCCESS:
      console.log('get success ',action)
      return action.payload;
    case GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
}

