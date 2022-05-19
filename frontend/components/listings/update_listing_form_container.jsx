import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { fetchListing, updateListing } from '../../actions/listing_actions';


class EditListingForm extends React.Component {

componentDidMount(){
    this.props.fetchListing(this.props.match.params.listingId)
}

render() {
    const { action, formType, listing } = this.props;


    if (!listing) return null;
        return (
        <ListingForm
            action={action}
            formType={formType}
            listing={listing} />
        );
    };  

};

const mSTP = (state, ownProps) => {
    return({
        listing: state.entities.listings[ownProps.match.params.listingId],
        formType: 'Update Listing'
    });
};

const mDTP = dispatch => ({
    action: listing => dispatch(updateListing(listing)),
    fetchListing: listingId => dispatch(fetchListing(listingId))
});

export default withRouter(connect(mSTP, mDTP)(EditListingForm));