import React from 'react'

const ChildComponent = () => {
  return(
    <div>
      <p>Props: {this.props.name}</p>
    </div>
  )
}


const ParentComponent = () => {
  state = {
  name: 'Yulia'
};
  return(
    <div>
      <p>Props: {this.props.name}</p>
      <ChildComponent name = {this.state.name}>
    </div>
  )
}
