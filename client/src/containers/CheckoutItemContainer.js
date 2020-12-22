import React from 'react';

import { gql } from '@apollo/client';
import { graphql } from '@apollo/client/react/hoc';
import { flowRight as compose } from 'lodash';
import CheckoutItem from '../components/checkout/CheckoutItem';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const REMOVE_ITEM_FROM_CART = gql`
  mutation RemoveItemFromCart($item: Item!) {
    removeItemFromCart(item: $item) @client
  }
`;

const CLEAR_ITEM_FROM_CART = gql`
  mutation ClearItemFromCart($item: Item!) {
    clearItemFromCart(item: $item) @client
  }
`;

const CheckoutItemContainer = ({
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  ...otherProps
}) => {
  return (
    <CheckoutItem
      {...otherProps}
      addItem={item => addItemToCart({ variables: { item } })}
      removeItem={item => removeItemFromCart({ variables: { item } })}
      clearItemFromCart={item => clearItemFromCart({ variables: { item } })}
    />
  );
};

export default compose(
  graphql(ADD_ITEM_TO_CART, { name: 'addItemToCart' }),
  graphql(REMOVE_ITEM_FROM_CART, { name: 'removeItemFromCart' }),
  graphql(CLEAR_ITEM_FROM_CART, { name: 'clearItemFromCart' })
)(CheckoutItemContainer);
