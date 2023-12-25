import React from 'react';
import { LoaderDiv, Loading } from './Loader.styled';
import { InfinitySpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoaderDiv>
      <InfinitySpin
        visible={true}
        width="200"
        color="#3f51b5"
        ariaLabel="infinity-spin-loading"
      />
      <Loading>Loading...</Loading>
    </LoaderDiv>
  );
};
