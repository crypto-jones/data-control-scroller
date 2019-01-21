import React from 'react';
import './Items';
import Items from './Items';
import { ItemsBoxContainer, ItemsBoxWrapper } from '../../styles/components';

const ItemsContainer = props => {
  return (
    <ItemsBoxContainer>
      <ItemsBoxWrapper className="items">
        <Items
          bgColor={props.bgColor}
          tabSelected={props.tabSelected}
          changeSelectedTabs={props.changeSelectedTabs}
        />
      </ItemsBoxWrapper>
    </ItemsBoxContainer>
  );
};

export default ItemsContainer;
