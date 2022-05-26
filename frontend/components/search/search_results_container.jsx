import { connect } from "react-redux";
import SearchResults from "./search_results";
import { fetchAllListings, search } from "../../actions/listing_actions";

const mSTP = state => {
    console.log('SRL', state)
    return {
        listings: state.entities.listings
    }
};

const mDTP = dispatch => ({
    search: query => dispatch(search(query))
});

export default connect(mSTP, mDTP)(SearchResults);