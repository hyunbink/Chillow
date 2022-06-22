import { combineReducers } from "redux";
import modal from "./modal_reducer";
import listingId from "./ui_listing_show_reducer";


export default combineReducers({
    modal,
    listingId
});