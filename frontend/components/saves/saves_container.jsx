import { connect } from "react-redux";
import SavesIndex from "./saves";
import { createSave, deleteSave } from '../../actions/save_actions';
import { fetchListing } from '../../actions/listing_actions';

const mSTP = (state) => {
    
    return({
        saves: Object.entries(state.entities.saves),
        listings: state.entities.listings
    });
};

const mDTP = dispatch => {


    return({
        fetchListing: listingId => dispatch(fetchListing(listingId)),
        deleteSave: save => dispatch(deleteSave(save)),
    })
};

export default connect(mSTP, mDTP)(SavesIndex);