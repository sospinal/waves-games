import { combineReducers } from "redux";
//Reducers
import gamesReducer from "./games";

const rootReducer = combineReducers({
  games: gamesReducer,
});

export default rootReducer;
