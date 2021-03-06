import { connect } from "react-redux";
import SearchResults from "./search_results";
import { fetchAllListings, search } from "../../actions/listing_actions";
import { createSave, deleteSave } from "../../actions/save_actions";
import { clearErrors } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = state => {
    return {
        listings: state.entities.listings,
        saves: Object.entries(state.entities.saves),
        searchErrors: state.errors.listingErrors
    }
};

const mDTP = dispatch => ({
    search: query => dispatch(search(query)),
    deleteSave: save => dispatch(deleteSave(save)),
    createSave: save => dispatch(createSave(save)),
    fetchAllListings: ()=> dispatch(fetchAllListings()),
    clearErrors: ()=> dispatch(clearErrors()),
    openModal: (modal, listingId) => dispatch(openModal(modal, listingId))
});

export default connect(mSTP, mDTP)(SearchResults);