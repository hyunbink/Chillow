import { RECEIVE_SAVE, DESTROY_SAVE, RECEIVE_ALL_SAVES } from "../actions/save_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";

const saveReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SAVE:
            return Object.assign({}, state, {[action.save.id]: action.save } );
        case RECEIVE_ALL_SAVES:
            // return Object.assign({}, state, action.saves)
        case DESTROY_SAVE:
            let nxtState = Object.assign({}, state);
            console.log('in tha reduca', action.save)
            delete nxtState[action.save.id];
            return nxtState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.saves)
        case LOGOUT_CURRENT_USER:
            return {};
        default:
            return state;
    }
};

export default saveReducer;

