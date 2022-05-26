import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserListings from "./user_listings";
import { fetchAllListings } from "../../actions/listing_actions";
import { closeModal, openModal } from '../../actions/modal_actions';
import { createSave, deleteSave } from '../../actions/save_actions';

const mSTP = state => {
    console.log('state', state)
    return({
        listings: state.entities.listings,
        currentUserId: state.session.id
    })
};

const mDTP = dispatch => ({
    fetchAllListings: () => dispatch(fetchAllListings()),
    closeModal: () => dispatch(closeModal()),
    createSave: save => dispatch(createSave(save)),
    deleteSave: save => dispatch(deleteSave(save)),
    openModal: (modal, listingId) => dispatch(openModal(modal, listingId))
});

export default withRouter(connect(mSTP, mDTP)(UserListings));