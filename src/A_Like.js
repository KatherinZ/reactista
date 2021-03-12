import React from 'react'
import PropTypes from 'prop-types'
import A_Textblock from './A_Textblock.js'



class A_Like extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      imageSrc: '../img/like_unclicked.svg',
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({
      imageSrc: '../img/like_clicked.svg'
    })
  }
  // toggleClick(){
  //   this.setState({
  //     imageSrc: !this.state.imageSrc
  //   })
  // }

  render() {
    return(
      <div className='likes'>

        <A_Textblock
        children = '99'
        headingSize ='heading--h5'
        headingStyle ='heading--gray'>
        </A_Textblock>

        <img src={this.state.imageSrc} onClick={this.handleClick}>
        </img>

      </div>
    )
  }
}

export default A_Like
