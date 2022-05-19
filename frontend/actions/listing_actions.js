import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

const receiveAllListings = listings => ({
    type: RECEIVE_ALL_LISTINGS,
    listings
});

const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing
});

const removeListing = listingId => ({
    type: REMOVE_LISTING,
    listingId
});

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
});

export const fetchAllListings = () => dispatch => {
    return ListingAPIUtil.fetchAllListings()
        .then(listings => dispatch(receiveAllListings(listings)))
}

export const fetchListing = listingId => dispatch => {
    return ListingAPIUtil.fetchListing(listingId)
        .then(listing => dispatch(receiveListing(listing)))
}

export const createListing = listing => dispatch => {
    return ListingAPIUtil.createListing(listing)
        .then(listing => dispatch(receiveListing(listing)))
}

export const updateListing = listing => dispatch => {
    return ListingAPIUtil.updateListing(listing)
        .then(listing => dispatch(receiveListing(listing)))
}

export const deleteListing = listingId => dispatch => {
    return ListingAPIUtil.deleteListing(listingId)
        .then(_ => dispatch(removeListing(listingId)))
}