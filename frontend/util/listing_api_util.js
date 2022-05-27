export const fetchAllListings = () => $.ajax({
    url: `/api/listings`
});

export const fetchListing = listingId => $.ajax({
    url: `/api/listings/${listingId}`
});

export const createListing = formData => $.ajax({
    url: `/api/listings`,
    method: `POST`,
    data: formData,
    contentType: false,
    processData: false
});

export const updateListing = (formData, listingId) => $.ajax({
    url: `/api/listings/${listingId}`,
    method: `PATCH`,
    data: formData,
    contentType: false,
    processData: false
});

export const deleteListing = listingId => $.ajax({
    url: `/api/listings/${listingId}`,
    method: 'DELETE'
});

export const search = query => $.ajax({
    url: `/api/listings/search`,
    data: { query }
});

