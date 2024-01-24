import React from 'react';
import styled from 'styled-components'
import { Button } from '../../shared/button/Button';

const StyledHeader = styled.header`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledIcon = styled.svg`
  display: inline-block;
  vertical-align: top;
  color: red;
`

const ButtonsDiv = styled.div`
  & button + button {
    margin-left: 10px;
  }
`

const StyledH1 = styled.h1`
  font-weight: 700;
  font-size: 20px;
  line-height: 1;
  margin: 6px 0 6px 10px;
  display: inline-block;
  vertical-align: top;
  color: red;
`

export const Header = () => (
  <StyledHeader>
      <div>
        <StyledIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
          <path fill="#ff0000" d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"/>
        </StyledIcon>
        <StyledH1>Burger Menu</StyledH1>
      </div>
      <ButtonsDiv>
        <Button size="small" onClick={()=>{}}>New Ingredient</Button>
        <Button size="small" onClick={()=>{}}>New Burger</Button>
        <Button size="small" onClick={()=>{}}>Remove Burger</Button>
      </ButtonsDiv>
  </StyledHeader>
);
