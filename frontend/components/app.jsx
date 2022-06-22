import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/navBar_container';
import Splash from './splash/splash'
import ListingIndexContainer from './listings/listings_index_container';
import UpdateListingFormContainer from './listings/update_listing_form_container';
import CreateListingFormContainer from './listings/create_listing_form_container';
import Modal from './modal/modal'
import SavesContainer from './saves/saves_container';
import SearchResults from './search/search_results_container';
import UserListings from './listings/user_listings_container';

const App = () => (
    <div>
        <header>
                <Modal />
            <NavBarContainer/>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <ProtectedRoute exact path="/listings/:listingId/edit" component={UpdateListingFormContainer} />
            <ProtectedRoute exact path="/listings/new" component={CreateListingFormContainer} />
            <ProtectedRoute exact path="/listings/saves" component={SavesContainer} />
            <ProtectedRoute exact path="/listings/user/listings" component={UserListings} />
            <Route exact path="/listings/search/results" component={SearchResults} />
            <Route exact path="/listings" component={ListingIndexContainer} />
            <Route exact path="/" component={Splash} />
            <Route path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;

