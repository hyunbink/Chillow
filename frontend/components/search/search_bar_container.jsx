import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { search } from "../../actions/listing_actions";
import { withRouter } from "react-router-dom";

const mSTP = state => ({
});

const mDTP = dispatch => ({
    search: query => dispatch(search(query)),
});

export default withRouter(connect(mSTP, mDTP)(SearchBar));