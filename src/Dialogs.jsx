import React from 'react';

const DialogItem = (props) => {

  return (
    <div className='dialog'>
      <a href={'#' props.id}>{props.name}}</a>
    </div>
  );
}

const Dialogs = (props) =>{
  return (
    <div className='dialogs'>
      <DialogItem name='Audrey' id='1'/>
      <DialogItem name='Sunny' id='2'/>
      <DialogItem name='Michael' id='3'/>
      <DialogItem name='Lady' id='4'/>
      <DialogItem name='Gent' id='5'/>
      <DialogItem name='Zoe' id='6'/>

    </div>
  )
}
