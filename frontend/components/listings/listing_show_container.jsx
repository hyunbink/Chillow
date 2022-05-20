import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';
import { withRouter } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    // console.log("conatiner stateteetet", state)
    return({
        // listingId: ownProps.listingId
        listingId: state.ui.listingId,
        listing: state.entities.listings[state.ui.listingId]
    })
};


const mDTP = dispatch => ({
    fetchListing: listingId => dispatch(fetchListing(listingId)),
});

export default withRouter(connect(mSTP, mDTP)(ListingShow));
