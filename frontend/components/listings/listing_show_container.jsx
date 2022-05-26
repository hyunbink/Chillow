import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';
import { withRouter } from 'react-router-dom';
import { closeModal } from '../../actions/modal_actions';
import { createSave, deleteSave } from '../../actions/save_actions';

const mSTP = (state, ownProps) => {
    // console.log("conatiner stateteetet", state)
    return({
        // listingId: ownProps.listingId
        listingId: state.ui.listingId,
        listing: state.entities.listings[state.ui.listingId],
        currentUserId: state.session.id,
        saves: Object.entries(state.entities.saves)
    })
};


const mDTP = dispatch => ({
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    closeModal: () => dispatch(closeModal()),
    createSave: save => dispatch(createSave(save)),
    deleteSave: saveId => dispatch(deleteSave(saveId))
});

export default withRouter(connect(mSTP, mDTP)(ListingShow));
