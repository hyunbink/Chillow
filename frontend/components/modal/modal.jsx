import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ListingShowContainer from '../listings/listing_show_container';

function Modal({modal, closeModal, listing}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'show':
            component = <ListingShowContainer listing={listing} />;
            break;
        default:
            return null;
    }
    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()} >
                { component }
            </div>
        </div>
    );
}

const mSTP = state => ({
    modal: state.ui.modal,
    listing: state.ui.listing
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal)