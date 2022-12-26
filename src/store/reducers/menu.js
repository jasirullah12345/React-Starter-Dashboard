import {ACTIVE_COMPONENT, ACTIVE_ITEM, OPEN_COMPONENT_DRAWER, OPEN_DRAWER} from "../actionTypes";

const initialState =  {
    openItem: ['dashboard'],
    openComponent: 'buttons',
    drawerOpen: false,
    componentDrawerOpen: true
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIVE_ITEM:
            return {
                ...state,
                openItem: action.payload.openItem
            }
        case ACTIVE_COMPONENT:
            return {
                ...state,
                openComponent: action.payload.openComponent
            }
        case OPEN_DRAWER:
            return {
                ...state,
                drawerOpen: action.payload.drawerOpen
            }
        case OPEN_COMPONENT_DRAWER:
            return {
                ...state,
                componentDrawerOpen: action.payload.componentDrawerOpen
            }
        default:
            return state;
    }
}
export default reducer