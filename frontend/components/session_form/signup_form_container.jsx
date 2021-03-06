import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors, signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: 'signup',
    navLink: <Link to ="/login">log in</Link>
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    clearErrors: ()=> dispatch(clearErrors()),
    login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);