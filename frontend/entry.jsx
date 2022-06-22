import React from 'react';
import ReactDOM  from 'react-dom';
import configureStore from './store/store';
import Root from './components/root'
// import { login, logout, signup } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.user.id },
            entities: {
                users: { [window.currentUser.user.id]: window.currentUser.user },
                saves: window.currentUser.saves,
                listings: window.currentUser.listings
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    
    // window.getState = store.getState;
    // window.dispatch = store.dispatch
    // window.login = login;
    // window.logout = logout;
    // window.signup = signup;
})




// img src={window.heroBanner}