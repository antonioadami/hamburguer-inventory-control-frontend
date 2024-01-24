import React from 'react';
import styled from 'styled-components'

interface BurgerItemProps {
    label: string;
}

const StyledContainer = styled.div`
  background-color: red;
  width: 180px;
  height: 40px;
  border-radius: 12px;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const StyledTitle = styled.h4`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: white;
  margin: 0;
`

export const BurgerItem = ({label}: BurgerItemProps) => (
  <StyledContainer>
      <StyledTitle>
        {label}
      </StyledTitle>
  </StyledContainer>
);
