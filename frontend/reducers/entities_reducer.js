import { combineReducers } from 'redux';

import users from './users_reducers';
import listings from './listings_reducer';
import saves from './save_reducer';

export default combineReducers({
    users,
    listings,
    saves
});