import React from 'react';
import Details from './Details';
import {
  DetailsBoxContainer,
  DetailsBoxWrapper,
} from '../../styles/components';

const DetailsContainer = () => {
  return (
    <DetailsBoxContainer>
      <DetailsBoxWrapper>
        <Details />
      </DetailsBoxWrapper>
    </DetailsBoxContainer>
  );
};

export default DetailsContainer;
