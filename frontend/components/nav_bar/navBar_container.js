import { connect } from 'react-redux';
import { clearErrors, logout } from '../../actions/session_actions';
import NavBar from './navBar';

const mSTP = ({session, entities: { users }}) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    clearErrors: ()=> dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(NavBar);

