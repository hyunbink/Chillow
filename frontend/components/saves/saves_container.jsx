import { connect } from "react-redux";
import SavesIndex from "./saves";
import { createSave, deleteSave } from '../../actions/save_actions';
import { fetchListing } from '../../actions/listing_actions';
import { openModal, closeModal } from '../../actions/modal_actions';


const mSTP = (state) => {
    let obj = {};
    state.entities.users[state.session.id].userSaves.forEach(listingId => {
        obj[listingId] = state.entities.listings[listingId];
    });
    return({
        saves: Object.entries(state.entities.saves),
        listings: obj 
    });
};

const mDTP = dispatch => {


    return({
        fetchListing: listingId => dispatch(fetchListing(listingId)),
        deleteSave: save => dispatch(deleteSave(save)),
        openModal: (modal, listingId) => dispatch(openModal(modal, listingId)),
        closeModal: () => dispatch(closeModal()),

    })
};

export default connect(mSTP, mDTP)(SavesIndex);