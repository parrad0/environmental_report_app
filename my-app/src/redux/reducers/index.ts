import { ADD_ARTICLE } from "redux/actions/constants/constants";

const initialState = {
  text: "init",
  cod: 233
};
function rootReducer(state = initialState, action: any) {
  if (action.type === ADD_ARTICLE) {
    return {
      ...state,
      text: action.text
    };
  }
  return state;
}
export default rootReducer;
