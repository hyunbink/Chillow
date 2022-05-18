import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING, REMOVE_LISTING } from "../actions/listing_actions";


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
        default:
            return state;
    }
}