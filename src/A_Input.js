import React from 'react'
import './input.css'

const STYLES = [
  'input--default',
  'input--error',

]

const SIZES = [
  'input--main--standart',
  'input--search--long',
  'input--textarea--wide',
]

const A_Input = ({
  type,
  inputStyle,
  inputSize
}) => {

  const checkInputStyle = STYLES.includes(inputStyle)
  ? inputStyle : STYLES[0]

  const checkInputSize = SIZES.includes(inputSize)
  ? inputSize : SIZES[0]

  return(
    <div>
      <input className = {`input ${checkInputStyle} ${checkInputSize}`} type = {type}>
        {}
      </input>

    </div>
  )
}

export default A_Input
