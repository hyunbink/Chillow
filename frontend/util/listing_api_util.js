export const fetchAllListings = () => $.ajax({
    url: `/api/listings`
});

export const fetchListing = listingId => $.ajax({
    url: `/api/listings/${listingId}`
});

export const createListing = listing => $.ajax({
    url: `/api/listings`,
    method: `POST`,
    data: { listing }
});

export const updateListing = listing => $.ajax({
    url: `/api/listings/${listing.id}`,
    method: `PATCH`,
    data: { listing }
});

export const deleteListing = listingId => $.ajax({
    url: `/api/reports/${listingId}`,
    method: 'DELETE'
});