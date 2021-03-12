import React from 'react'
import PropTypes from 'prop-types'
import './buttonList.css'
import A_CategoryName from './A_CategoryName.js'

class M_ButtonList extends React.Component {
  render () {
    return (
        <div className='button-line'>
          <a>
            <A_CategoryName
            children = 'все'
            categoryStyle = 'category--default'
            />
          </a>
          <a>
            <A_CategoryName
            children = 'люди'
            categoryStyle = 'category--default'
            />
          </a>
          <a>
            <A_CategoryName
            children = 'история'
            categoryStyle = 'category--default'
            />
          </a>
          <a>
            <A_CategoryName
            children = 'атмосфера'
            categoryStyle = 'category--default'
            />
          </a>
          <a>
            <A_CategoryName
            children = 'полезное'
            categoryStyle = 'category--default'
            />
          </a>
          <a>
            <A_CategoryName
            children = 'шорты-стори'
            categoryStyle = 'category--default'
            />
          </a>
        </div>
    );
  }
}

export default M_ButtonList
