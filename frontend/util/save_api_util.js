
export const createSave = (save) => {
    return $.ajax({
        method: 'POST',
        url: '/api/saves',
        data: { save }
    });
};

export const deleteSave = (listingId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/saves/${listingId}`
    });
};

export const showSaves = saves => {
    return $.ajax({
        url: `/api/saves`,
        data: { saves }
    })
}