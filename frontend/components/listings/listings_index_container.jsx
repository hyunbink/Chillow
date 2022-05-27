import { connect } from 'react-redux';
import React from 'react';
import { fetchAllListings } from '../../actions/listing_actions';
import { withRouter, Link } from 'react-router-dom';
import ListingsIndex from '../listings/listings_index';
import { openModal, closeModal } from '../../actions/modal_actions';
import { createSave, deleteSave } from '../../actions/save_actions';


const mSTP = (state, ownProps) => {
    // console.log("almost got it", state);
    // if (state.entities.users[state.session.id]) {
    //     let userSaves = state.entities.users[state.session.id].userSaves;
    // } else { let userSaves = null}

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
    createSave: save => dispatch(createSave(save))
});

export default withRouter(connect(mSTP, mDTP)(ListingsIndex));