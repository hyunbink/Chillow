import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { createListing } from '../../actions/listing_actions';

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
            // photoUrls: '' or is it photos: '' ?
            // include owner_id? or have it do it by itself?
        },
        formType: 'Create Listing'
    });
};

const mDTP = dispatch => ({
    action: listing => dispatch(createListing(listing))
});

export default withRouter(connect(mSTP, mDTP)(ListingForm));