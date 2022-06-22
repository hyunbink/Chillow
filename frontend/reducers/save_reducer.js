import { RECEIVE_SAVE, DESTROY_SAVE, RECEIVE_ALL_SAVES } from "../actions/save_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { REMOVE_LISTING } from "../actions/listing_actions";

const saveReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SAVE:
            return Object.assign({}, state, {[action.save.id]: action.save } );
        case RECEIVE_ALL_SAVES:
        case DESTROY_SAVE:
            let nxtState = Object.assign({}, state);
            delete nxtState[action.save.id];
            return nxtState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.saves);
        case LOGOUT_CURRENT_USER:
            return {};
        case REMOVE_LISTING:
            let saveState = Object.assign({}, state);
            let array = Object.keys(saveState).map(key=> state[key])
                .filter(value=> value.listing_id === action.listingId);
            for (let i = 0; i < array.length; i++) {
                delete saveState[array[i].id];
            }
            delete saveState[action.save]
        default:
            return state;
    }
};

export default saveReducer;

