import { combineReducers } from 'redux';

import session from './session_errors_reducer';
import listingErrors from './listing_errors_reducer';

export default combineReducers({
    session,
    listingErrors
});