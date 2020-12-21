import React from 'react';

import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from 'lodash';

import Header from '../components/Header';

const GET_CART_HIDDEN = gql`
  {
    cartHidden @client
  }
`;

const HeaderContainer = ({ data: { cartHidden } }) => (
  <Header hidden={cartHidden} />
);

export default compose(graphql(GET_CART_HIDDEN))(HeaderContainer);
