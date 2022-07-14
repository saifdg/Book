import isEmpty from "../../util/isEmpty";
import { DELETE_USER, SET_USER, SET_USERS } from "../actions/books/actionTypes";

const initialState = {
  isconected: false,
  user: {},

};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isconected: !isEmpty(action.payload),
        user: action.payload,
      };
     
    default:
      return state;
  }
}
