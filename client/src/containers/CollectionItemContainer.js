import React from 'react';

import { useMutation, gql } from '@apollo/client';

import CollectionItem from '../components/collections/CollectionItem';

const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart($item: Item!) {
    addItemToCart(item: $item) @client
  }
`;

const CollectionItemContainer = props => {
  const [addItemToCart] = useMutation(ADD_ITEM_TO_CART);

  return (
    <CollectionItem
      {...props}
      addItem={item => addItemToCart({ variables: { item } })}
    />
  );
};

export default CollectionItemContainer;
