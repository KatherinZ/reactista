import React from 'react'
import './textblock.css'

const STYLES = [
  'heading--black',
  'heading--gray',
  'heading--red',
]

const SIZES = [
'heading--h1',
'heading--h2',
'heading--h3',
'heading--h4',
'heading--h5',
'heading--small-descript',
]

const A_Textblock = ({
  children,
  type,
  headingStyle,
  headingSize,
}) => {

  const checkHeadingStyle = STYLES.includes(headingStyle)
  ? headingStyle : STYLES[0]

  const checkHeadingSize = SIZES.includes(headingSize)
  ? headingSize : SIZES[0]

  return(
      <span className = {`heading ${checkHeadingStyle} ${checkHeadingSize}`} type = {type}>
        {children}
      </span>

  )
}

export default A_Textblock
