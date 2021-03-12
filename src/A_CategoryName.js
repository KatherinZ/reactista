import React from 'react'
import './category.css'

const STYLES = [
  'category--default',
  'category--active',
  'category--inPost',
  'category--inArticle',
]

const A_CategoryName = ({
  children,
  type,
  categoryStyle,
}) => {

  const checkCategoryStyle = STYLES.includes(categoryStyle)
  ? categoryStyle : STYLES[0]


  return(
      <button className = {`category ${checkCategoryStyle}`} categoryStyle= {categoryStyle} type = {type}>
        {children}
      </button>

  )
}

export default A_CategoryName
