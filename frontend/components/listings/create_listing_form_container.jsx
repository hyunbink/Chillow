import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { createListing } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
    return({
        listing: {
            street: '' , 
            city: '' , 
            state: '' , 
            zip_code: '' , 
            sqft: '' , 
            beds: '' , 
            baths: '' , 
            price: '' , 
            latiude: '' ,
            longitude: '' ,
            photoUrls: '',
            owner_id: ''
        },
        formType: 'Create Listing',
        errors: state.errors.listingErrors
    });
};

const mDTP = dispatch => ({
    action: listing => dispatch(createListing(listing)),
    openModal: (modal, listingId) => dispatch(openModal(modal, listingId))
});

export default withRouter(connect(mSTP, mDTP)(ListingForm));