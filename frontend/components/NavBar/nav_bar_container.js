import { connect } from 'react-redux';
import { logout } from "../../actions/session_actions";
import NavBar from './nav_bar';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return {
    session: state.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NavBar));
