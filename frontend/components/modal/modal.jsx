import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import ListingShowContainer from '../listings/listing_show_container';
import { GrClose } from 'react-icons/gr';

function Modal({modal, closeModal, listingId}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'show':
            component = <ListingShowContainer listingId={listingId} />;
            break;
        default:
            return null;
    }
    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()} >
                { component }
            </div>
            <div className='modal-x'>
                <GrClose id='x-modal'/>
            </div>
        </div>
    );
}

const mSTP = state => ({
    modal: state.ui.modal,
    listingId: state.ui.listingId
});

const mDTP = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(Modal)