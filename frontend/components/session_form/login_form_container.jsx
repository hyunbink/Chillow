import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from './session_form';
import { clearErrors, login } from '../../actions/session_actions'


const mSTP = ({errors}) => ({
    errors: errors.session,
    formType: 'login',
    navLink: <Link to="/signup">sign up instead</Link>
});

const mDTP = dispatch => ({
    processForm: (user) => dispatch(login(user)),
    login: (user)=> dispatch(login(user)),
    clearErrors: ()=> dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(SessionForm);