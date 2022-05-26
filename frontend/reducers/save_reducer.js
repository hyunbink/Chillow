import { RECEIVE_SAVE, DESTROY_SAVE, RECEIVE_ALL_SAVES } from "../actions/save_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const saveReducer = (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case RECEIVE_SAVE:
            return Object.assign({}, state, {[action.save.id]: action.save } );
        case RECEIVE_ALL_SAVES:
            // return Object.assign({}, state, action.saves)
        case DESTROY_SAVE:
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.saves)
        default:
            return state;
    }
};

export default saveReducer;

