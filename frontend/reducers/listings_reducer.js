import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING, RECEIVE_SEARCH_LISTINGS } from "../actions/listing_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";


export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_LISTINGS:
            return Object.assign({}, state, action.listings);
        case RECEIVE_LISTING:
            return Object.assign({}, state, {[action.listing.id]: action.listing});
        case REMOVE_LISTING:
            let nxtState = Object.assign({}, state);
            delete nxtState[action.listingId];
            return nxtState;
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, action.payload.listings);
        case RECEIVE_SEARCH_LISTINGS:
            return Object.assign({}, action.listings)
        default:
            return state;
    }
}