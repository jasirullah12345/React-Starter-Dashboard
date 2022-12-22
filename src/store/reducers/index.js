import {combineReducers} from "redux";
import AmountReducer from "./amount";
import {storeIntialState} from "../index";
import {RESET_STORE} from "../actionTypes";

const appReducers = combineReducers({
    amount: AmountReducer
})

const reducers = (state, action) => {
    // Reset Store to initial state.
    if (action.type === RESET_STORE) {
        state = storeIntialState;
    } else {
        return appReducers(state, action);
    }
};

export default reducers