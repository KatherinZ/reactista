import React from 'react'
import A_Button from './A_Button.js'
import A_Textblock from './A_Textblock.js'
import A_Input from './A_Input.js'
import './m_input.css'

const M_Input = ({
  name,
  descript,
  btnName,
  afterText
}) => {
  return(
    <div className='extendedInput'>
      <div className ='inputText'>
        <A_Textblock
        headingSize ='heading--h2'
        headingStyle ='heading--black'
        type = 'span'>
        {name}
        </A_Textblock>

        <A_Textblock
        headingSize ='heading--small-descript'
        headingStyle ='heading--gray'
        type = 'span'>
        {descript}
        </A_Textblock>
      </div>

      <div className='inputBtn'>
        <A_Input
          type = 'input'
          inputSize ='input--main--standart'
          inputStyle ='input--default'
        />
        <A_Button
        type ='button'
        buttonStyle = 'btn--default'
        buttonSize = 'btn--large'>
        {btnName}
        </A_Button>
      </div>

      <A_Textblock
      headingSize ='heading--small-descript'
      headingStyle ='heading--red'
      type = 'span'>
      {afterText}
      </A_Textblock>
    </div>
  )
}

export default M_Input
