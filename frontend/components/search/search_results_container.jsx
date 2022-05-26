import { connect } from "react-redux";
import SearchResults from "./search_results";
import { fetchAllListings, search } from "../../actions/listing_actions";
import { createSave, deleteSave } from "../../actions/save_actions";

const mSTP = state => {
    console.log('SRL', state)
    return {
        listings: state.entities.listings,
        saves: Object.entries(state.entities.saves),
    }
};

const mDTP = dispatch => ({
    search: query => dispatch(search(query)),
    deleteSave: save => dispatch(deleteSave(save)),
    createSave: save => dispatch(createSave(save))
});

export default connect(mSTP, mDTP)(SearchResults);