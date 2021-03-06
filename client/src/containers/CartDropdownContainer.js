import React from 'react';

import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from 'lodash';

import CartDropdown from '../components/cart/CartDropdown';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`;

const CartDropdownContainer = ({ data: { cartItems }, toggleCartHidden }) => (
  <CartDropdown cartItems={cartItems} toggleCartHidden={toggleCartHidden} />
);

export default compose(
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' }),
  graphql(GET_CART_ITEMS)
)(CartDropdownContainer);
