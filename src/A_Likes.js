import React from 'react'
import PropTypes from 'prop-types'
import A_Textblock from './A_Textblock.js'

const imageSrc ={
  clicked: '../img/like_clicked.svg',
  unclicked: '../img/like_unclicked.svg'
}

class A_Likes extends React.Component{
  state = {
    show: true
  }
  toggleImage = () => {
    this.setState(state => ({show: !state.show}))
  }

  getImg = () => this.state.show ? 'unclicked' : 'clicked'

  render() {
    const imgName = this.getImg()
    return(
      <div className='likes'>
        <img src={imageSrc[imgName]} onClick={this.toggleImage}>
        </img>

      </div>
    )
  }
}

export default A_Likes
