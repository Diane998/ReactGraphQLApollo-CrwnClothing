import React from 'react';
import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from 'lodash';

import Cart from '../components/cart/Cart';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartContainer = ({ data: { itemCount }, toggleCartHidden }) => (
  <Cart toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
);
export default compose(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' })
)(CartContainer);
