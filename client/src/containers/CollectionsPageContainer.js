import React from 'react';

import { gql, useQuery } from '@apollo/client';

import CollectionPage from '../components/pages/CollectionPage';
import Spinner from '../components/Spinner';

const GET_COLLECTION_BY_TITLE = gql`
  query getCollectionsByTitle($title: String!) {
    getCollectionsByTitle(title: $title) {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsPageContainer = ({ match }) => {
  const { loading, data } = useQuery(GET_COLLECTION_BY_TITLE, {
    variables: { title: match.params.collectionId }
  });

  return loading ? (
    <Spinner />
  ) : (
    <CollectionPage collection={data.getCollectionsByTitle} />
  );
};

export default CollectionsPageContainer;
