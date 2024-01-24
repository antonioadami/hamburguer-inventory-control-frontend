import React from 'react';
import styled from 'styled-components'
import { Burger } from '../../models/Burger';
import { BurgerItem } from '../burger-item/BurgerItem';

interface ItemsListProps {
    items: Burger[]
}

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 24px;

  margin: 32px;
`


export const ItemsList = ({items}: ItemsListProps) => (
  <StyledContainer>
      { items.map(item => <BurgerItem label={item.name} key={item.id}></BurgerItem>) }
  </StyledContainer>
);
