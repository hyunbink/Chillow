import { connect } from 'react-redux';
import { fetchAllListings, deleteListing } from '../../actions/listing_actions';
import { withRouter } from 'react-router-dom';
import ListingsIndex from '../listings/listings_index';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createSave, deleteSave } from '../../actions/save_actions';


const mSTP = (state, ownProps) => {
    let userSaves = state.entities.users[state.session.id] ?  state.entities.users[state.session.id].userSaves : null;
    return({
        listings: state.entities.listings,
        saves: Object.entries(state.entities.saves),
        currentUserId: state.session.id,
        userSaves: userSaves
    })
};


const mDTP = dispatch => ({
    fetchAllListings: () => dispatch(fetchAllListings()),
    openModal: (modal, listingId) => dispatch(openModal(modal, listingId)),
    deleteSave: save => dispatch(deleteSave(save)),
    createSave: save => dispatch(createSave(save)),
    deleteListing: listingId => dispatch(deleteListing(listingId))
});

export default withRouter(connect(mSTP, mDTP)(ListingsIndex));