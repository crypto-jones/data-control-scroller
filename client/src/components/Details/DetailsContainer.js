import React from 'react';
import Details from './Details';
import {
  DetailsBoxContainer,
  DetailsBoxWrapper,
} from '../../styles/components';

const DetailsContainer = props => {
  return (
    <DetailsBoxContainer>
      <DetailsBoxWrapper className="details-container">
        <Details
          bgColor={props.bgColor}
          tabSelected={props.tabSelected}
          changeSelectedTabs={props.changeSelectedTabs}
        />
      </DetailsBoxWrapper>
    </DetailsBoxContainer>
  );
};

export default DetailsContainer;
