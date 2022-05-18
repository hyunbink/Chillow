import { combineReducers } from 'redux';

import users from './users_reducers'
import listings from './listings_reducer'

export default combineReducers({
    users,
    listings,
});