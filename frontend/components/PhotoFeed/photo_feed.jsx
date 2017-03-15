import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class PhotoFeed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (!this.props.session.currentUser) {
      this.props.router.push("/login");
    }
  }

  render() {

    return (
      <div>
        <button onClick={this.props.logout}>Log out</button>
      </div>
    );
  }
}

export default withRouter(PhotoFeed);
