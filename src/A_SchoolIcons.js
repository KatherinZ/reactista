import React from 'react'
import './schoolIcons.css'


// const A_SchoolIcons = [
//   { src: './img/toilet.svg'},
//   { src: './img/shower.svg'},
//   { src: './img/cafe.svg'},
//   { src: './img/sup.svg'},
//   { src: './img/bus.svg'},
//   { src: './img/shop.svg'},
// ]



const A_SchoolIcons = ({
  children,
  type,
}) => {

  return(
      <div className = {`icons`} type = {type}>
        <img src='../img/toilet.svg' />
        <img src='../img/shower.svg' />
        <img src='../img/cafe.svg' />
        <img src='../img/sup.svg' />
        <img src='../img/bus.svg' />
        <img src='../img/shop.svg' />
      </div>
  )
}
export default A_SchoolIcons
