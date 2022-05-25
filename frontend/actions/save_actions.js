import * as SaveAPIUtil from '../util/save_api_util';

export const RECEIVE_SAVE = 'RECEIVE_SAVE';
export const DESTROY_SAVE = 'DESTROY_SAVE';

export const receiveSave = save => ({
    type: RECEIVE_SAVE,
    save
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