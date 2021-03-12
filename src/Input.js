import React from 'react';
import styled, { css } from 'styled-components'

class Input extends React.Component{
  render() {
    return (
      <div>
        <p>Имя</p>
        <p>Техническое </p>
        <input/>
        <p>Ой, ошибка</p>
      </div>
    );
  }
}
<p>Имя</p>
Input = styled.input`
height: 14px;
width: 316px;
border-radius: 16px;
padding: 16px;
`


export default Input
