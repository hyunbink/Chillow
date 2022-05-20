import { connect } from 'react-redux';
import React from 'react';
import { fetchAllListings } from '../../actions/listing_actions';
import { withRouter, Link } from 'react-router-dom';
// import ListingIndex from './listing_index';
import Search from './search';

const mSTP = (state, ownProps) => {
    // console.log("state", state)
    return({
        listings: state.entities.listings
    })
};


const mDTP = dispatch => ({
    fetchAllListings: () => dispatch(fetchAllListings()),
});

export default withRouter(connect(mSTP, mDTP)(Search));