import {storeIntialState} from "../index";
import {RESET_STORE} from "../actionTypes";
import {combineReducers} from "redux";
import MenuReducer from "./menu";

const appReducers = combineReducers({
    menu: MenuReducer,
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