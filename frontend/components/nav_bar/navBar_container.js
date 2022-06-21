import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listing_actions';
import { clearErrors, logout } from '../../actions/session_actions';
import NavBar from './navBar';

const mSTP = ({session, entities: { users }}) => ({
    currentUser: users[session.id]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    clearErrors: ()=> dispatch(clearErrors()),
    fetchAllListings: ()=> dispatch(fetchAllListings())
});

export default connect(mSTP, mDTP)(NavBar);

