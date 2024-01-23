import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components'

interface ButtonProps {
  mode?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  ${({mode}) => mode === 'primary' ? css`
    color: white;
    background-color: red;
  ` : `
    color: red;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  `}

  ${({size}) => size === 'small' && css`
    font-size: 12px;
    padding: 10px 16px;
  `}
  ${({size}) => size === 'medium' && css`
    font-size: 14px;
    padding: 11px 20px;
  `}
  ${({size}) => size === 'large' && css`
    font-size: 16px;
    padding: 12px 24px; 
  `}
`;

/**
 * Primary UI component for user interaction
 */
export const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  mode = 'secondary',
  size = 'medium',
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      mode={mode}
      size={size}
      {...props}
    >
      {props.children}
    </StyledButton>
  );
};
