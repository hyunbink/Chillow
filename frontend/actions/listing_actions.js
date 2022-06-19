import * as ListingAPIUtil from '../util/listing_api_util';

export const RECEIVE_ALL_LISTINGS = 'RECEIVE_ALL_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const REMOVE_LISTING = 'REMOVE_LISTING';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_SEARCH_LISTINGS = 'RECEIVE_SEARCH_LISTINGS'

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

const receiveSearchListings = listings => ({
    type: RECEIVE_SEARCH_LISTINGS,
    listings
})

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
        .then(listing => dispatch(receiveListing(listing)),
        (err) => dispatch(receiveErrors(err.responseJSON)))
}

export const updateListing = (listing, id) => dispatch => {
    return ListingAPIUtil.updateListing(listing, id)
        .then(listing => dispatch(receiveListing(listing)),
        (err) => dispatch(receiveErrors(err.responseJSON)))
}

export const deleteListing = listingId => dispatch => {
    return ListingAPIUtil.deleteListing(listingId)
        .then(_ => dispatch(removeListing(listingId)))
}

// export const savedListings = listingIds => dispatch => {
//     return ListingAPIUtil.savedListings(listingIds)
//         .then(listings => dispatch(receiveAllListings(listings)))
// }

export const search = query => dispatch => {
    return ListingAPIUtil.search(query)
        .then(listings => dispatch(receiveSearchListings(listings)))
}