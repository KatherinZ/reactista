import React from 'react';
import styled, { css } from 'styled-components'

const Button = styled.button`
font-family: 'Raleway';
padding: 12px 16px;
width: 134px;
height: 40px;
background: #2763BD;
color: #fff;
border-radius: 24px;
border: none;
font-size: 14px;

  ${props =>
  props.primary &&
  css`
    opacity: 0.5;
  `};

  ${props =>
  props.textbtn &&
  css`
    background: none;
    border-radius: none;
    color: #2763BD;
    font-size: 20px;
    font-weight: 600;
  `}
`
export default Button
