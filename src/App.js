import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import './App.css'
// import Button from './Button.js'
// import Input from './Input.js'
import A_Button from './A_Button.js'
import A_Textblock from './A_Textblock.js'
import A_Input from './A_Input.js'
import M_Input from './M_Input.js'
import A_CategoryName from './A_CategoryName.js'
import A_SchoolIcons from './A_SchoolIcons.js'
import M_PostPreview from './M_PostPreview.js'
import Hello from './Hello.js'
import M_ButtonList from './M_ButtonList.js'




const App = (props) => { //переменная является функцией, которая возвращает то, что внутри нее
  return (
    <div className='wrapper'>
      <M_ButtonList/>
      <M_Input
      name='пароль'
      btnName='Изменить'
      />

      <M_PostPreview
      postImg = '../img/test.png'
      categoryName = 'История'
      name ='Самые лучшие доски для катания в Тихом океане'
      descript = 'Индивидуальная тренировка от 3700 руб.'
      iframe = '<iframe src="https://vimeo.com/153849913"></iframe>'
      vidSrc = "https://vimeo.com/153849913"
      vidWidth = "432"
      vidHeight = "280"
      />
    </div>
  )
}



export default App ;



<div className='wrapper'>
  <Hello
  message = 'matrix'
  />
</div>
