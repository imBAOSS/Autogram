import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// react router
import { Router, Route, IndexRedirect, hashHistory, IndexRoute } from 'react-router';

// react components
import App from './App';
import AuthFormContainer from './AuthForm/auth_form_container';
import PhotoFeedContainer from './PhotoFeed/photo_feed_container';
import ProfilePageContainer from './ProfilePage/profile_page_container';
import NavBarContainer from './NavBar/nav_bar_container';

const Root = ({store}) => {

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace("/feed");
    }
  };

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace("/login");
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App }>
          <IndexRedirect to='/login'/>
          <Route path="/signup" component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="/login" component={ AuthFormContainer } onEnter={ _redirectIfLoggedIn }/>
          <Route path="/feed" component={ PhotoFeedContainer } onEnter={ _ensureLoggedIn }/>
          <Route path="/profile/:id"
            component={ ProfilePageContainer }/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
