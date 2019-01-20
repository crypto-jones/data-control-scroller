import React from 'react';
import './Items';
import Items from './Items';
import { ItemsBoxContainer, ItemsBoxWrapper } from '../../styles/components';

const ItemsContainer = () => {
  return (
    <ItemsBoxContainer>
      <ItemsBoxWrapper>
        <Items />
      </ItemsBoxWrapper>
    </ItemsBoxContainer>
  );
};

export default ItemsContainer;
