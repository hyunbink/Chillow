import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/navBar_container';
import Splash from './splash/splash'
import ListingShowContainer from './listings/listing_show_container';
import ListingIndexContainer from './search/search_container';
import UpdateListingFormContainer from './listings/update_listing_form_container';
import CreateListingFormContainer from './listings/create_listing_form_container';
import Modal from './modal/modal'

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
            <Route exact path="/listings" component={ListingIndexContainer} />
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;

