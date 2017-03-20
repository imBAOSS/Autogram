import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import ProfilePage from './profile_page';
import { fetchUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    session: state.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchUser: id => dispatch(fetchUser(id)),
    logout: () => dispatch(logout()),
    createFollow: id => dispatch(createFollow(id)),
    deleteFollow: id => dispatch(deleteFollow(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ProfilePage));
