import { connect } from 'react-redux';
import React from 'react';
import { fetchAllListings } from '../../actions/listing_actions';
import { withRouter, Link } from 'react-router-dom';
// import ListingIndex from './listing_index';
import Search from './search';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    // console.log("state", state)
    return({
        listings: state.entities.listings
    })
};


const mDTP = dispatch => ({
    fetchAllListings: () => dispatch(fetchAllListings()),
    openModal: (modal, listingId) => dispatch(openModal(modal, listingId))
});

export default withRouter(connect(mSTP, mDTP)(Search));