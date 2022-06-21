import { 
    RECEIVE_ERRORS,
    RECEIVE_ALL_LISTINGS,
    RECEIVE_LISTING,
    RECEIVE_SEARCH_LISTINGS
} from "../actions/listing_actions";
import { 
    CLEAR_ERRORS 
} from "../actions/session_actions";

const listingErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LISTINGS:
            return [];
        case RECEIVE_LISTING:
            return [];
        case RECEIVE_SEARCH_LISTINGS:
            return [];
        case CLEAR_ERRORS:
            return [];
        case RECEIVE_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default listingErrorsReducer;