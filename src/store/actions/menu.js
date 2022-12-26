import {ACTIVE_COMPONENT, ACTIVE_ITEM, OPEN_COMPONENT_DRAWER, OPEN_DRAWER} from "../actionTypes";

export const activeItem = (payload) => {
    return (dispatch) => {
        dispatch({
            type: ACTIVE_ITEM,
            payload
        });
    };
};

export const activeComponent = (payload) => {
    return (dispatch) => {
        dispatch({
            type: ACTIVE_COMPONENT,
            payload
        });
    };
};

export const openDrawer = (payload) => {
    return (dispatch) => {
        dispatch({
            type: OPEN_DRAWER,
            payload
        });
    };
};

export const openComponentDrawer = (payload) => {
    return (dispatch) => {
        dispatch({
            type: OPEN_COMPONENT_DRAWER,
            payload
        });
    };
};
