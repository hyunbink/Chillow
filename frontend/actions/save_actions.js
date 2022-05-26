import * as SaveAPIUtil from '../util/save_api_util';

export const RECEIVE_SAVE = 'RECEIVE_SAVE';
export const DESTROY_SAVE = 'DESTROY_SAVE';
export const RECEIVE_ALL_SAVES = 'RECEIVE_ALL_SAVES'

export const receiveSave = save => ({
    type: RECEIVE_SAVE,
    save
});

export const receiveAllSaves = saves => ({
    type: RECEIVE_ALL_SAVES,
    saves
});

export const destroySave = currentUser => ({
    type: DESTROY_SAVE,
    currentUser
});

export const createSave = save => dispatch => (
    SaveAPIUtil.createSave(save).then( (save) => (
    dispatch(receiveSave(save))
    ))
);

export const deleteSave = listingId => dispatch => (
    SaveAPIUtil.deleteSave(listingId).then( (currentUser) => (
    dispatch(destroySave(currentUser))
    ))
);

// export const fetchSaves = saves => dispatch => (
//     SaveAPIUtil.
// )