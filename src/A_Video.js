import React from 'react'
import PropTypes from 'prop-types'


class A_Video extends React.Component{
  iframe() {
    return{
      __html: this.props.iframe
    }
  }

  render() {
    return(
      <div className='videoFrame'>
        <div dangerouslySetInnerHTML={this.iframe()} />
      </div>
    )
  }
}

const iframe = '<iframe src="https://vimeo.com/153849913"></iframe>'
export default A_Video
