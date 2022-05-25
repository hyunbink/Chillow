import { RECEIVE_SAVE, DESTROY_SAVE } from "../actions/save_actions";

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SAVE:
            return Object.assign({}, state, {[action.save.id]: action.save } );
        case DESTROY_SAVE:

        default:
            return state;
    }
}

