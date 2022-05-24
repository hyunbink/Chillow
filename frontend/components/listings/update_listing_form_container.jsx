import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import ListingForm from './listing_form';
import { fetchListing, updateListing } from '../../actions/listing_actions';
import { openModal } from '../../actions/modal_actions';

class EditListingForm extends React.Component {

componentDidMount(){
    this.props.fetchListing(this.props.match.params.listingId)
}

render() {
    const { action, formType, listing, openModal, history } = this.props;


    if (!listing) return null;
        return (
        <ListingForm
            action={action}
            formType={formType}
            listing={listing}
            openModal={openModal} 
            history={history}/>
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
    action: (listing, id) => dispatch(updateListing(listing, id)),
    fetchListing: listingId => dispatch(fetchListing(listingId)),
    openModal: (modal, listingId) => dispatch(openModal(modal, listingId))
});

export default withRouter(connect(mSTP, mDTP)(EditListingForm));