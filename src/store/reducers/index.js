import {combineReducers} from "redux";
import AmountReducer from "./amount";

const reducers = combineReducers({
    amount: AmountReducer
})
export default reducers