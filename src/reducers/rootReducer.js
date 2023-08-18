import { combineReducers } from "redux";
import reservationReducer from "./reservationReducer";

const rootReducer = combineReducers({
    reservations: reservationReducer,
});

export default rootReducer;