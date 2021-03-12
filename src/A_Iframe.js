import React from 'react'
import PropTypes from 'prop-types'


class A_Iframe extends React.Component{
  // iframe() {
  //   return{
  //     __html: this.props.iframe
  //   }
  // }

  render() {
    return(
      <div className='videoFrame'>
        <iframe
        src={this.props.vidSrc}
        height={this.props.vidHeight} width={this.props.vidWidth}
        />
      </div>
    )
  }
}

const iframe = '<iframe src="https://vimeo.com/153849913"></iframe>'
export default A_Iframe
