import { connect } from 'react-redux';
import React from 'react';
import { fetchListing } from '../../actions/listing_actions';
import ListingShow from './listing_show';
import { withRouter, Link } from 'react-router-dom';

const mSTP = (state, ownProps) => {
    return({
        listing: state.entities.listings[ownProps.match.params.listingId]
    })
};


const mDTP = dispatch => ({
    fetchListing: listingId => dispatch(fetchListing(listingId)),
});

export default withRouter(connect(mSTP, mDTP)(ListingShow));
