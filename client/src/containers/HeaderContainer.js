import React from 'react';

import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from 'lodash';

import Header from '../components/Header';

const GET_CART_HIDDEN_AND_CURRENT_USER = gql`
  {
    cartHidden @client
    currentUser @client
  }
`;

const HeaderContainer = ({ data: { cartHidden, currentUser } }) => (
  <Header hidden={cartHidden} currentUser={currentUser} />
);

export default compose(graphql(GET_CART_HIDDEN_AND_CURRENT_USER))(
  HeaderContainer
);
