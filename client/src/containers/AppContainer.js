// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectCurrentUser } from '../redux/selectors/userSelector';
// import { checkUserSession } from '../redux/actions/usersActions';
// import App from '../components/App';

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// });

// const AppContainer = connect(mapStateToProps, { checkUserSession })(App);

// export default AppContainer;

import React from 'react';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from 'lodash';

import App from '../components/App';

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`;

const SET_CURRENT_USER = gql`
  mutation SetCurrentUser($user: User!) {
    setCurrentUser(user: $user) @client
  }
`;

const AppContainer = ({ data: { currentUser }, setCurrentUser }) => (
  <App
    currentUser={currentUser}
    setCurrentUser={currentUser =>
      setCurrentUser({ variables: { currentUser } })
    }
  />
);

export default compose(
  graphql(GET_CURRENT_USER),
  graphql(SET_CURRENT_USER, { name: 'setCurrentUser' })
)(AppContainer);
