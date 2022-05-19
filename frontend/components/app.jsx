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
import NavBarContainer from './greeting/navBar_container';
import Splash from './splash/splash'
import ListingShowContainer from './listings/listing_show_container';
import ListingIndexContainer from './listings/listing_index_container';

const App = () => (
    <div>
        <header>
                
            <NavBarContainer/>
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/listings/:listingId" component={ListingShowContainer} />
            <Route exact path="/listings" component={ListingIndexContainer} />
            <Route exact path="/" component={Splash} />
        </Switch>
    </div>
);

export default App;

