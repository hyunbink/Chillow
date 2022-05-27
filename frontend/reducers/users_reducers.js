import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_SAVE, DESTROY_SAVE } from "../actions/save_actions";
import { REMOVE_LISTING } from "../actions/listing_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    const newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, newState, {[action.payload.user.id]: action.payload.user});
        case LOGOUT_CURRENT_USER:
            return {};
        case RECEIVE_SAVE:
            // debugger;
            newState[action.save.user_id].userSaves.push(action.save.listing_id);
            return newState;
        case DESTROY_SAVE:
            // debugger;
            const idx = newState[action.save.user_id].userSaves.findIndex((ele)=> ele === action.save.listing_id);
            newState[action.save.user_id].userSaves.splice(idx, 1);
            return newState;
        default:
            return state;
    }
};

export default usersReducer;