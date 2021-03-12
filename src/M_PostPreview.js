import React from 'react'
import './postPreview.css'
import A_Textblock from './A_Textblock.js'
import A_CategoryName from './A_CategoryName.js'
import A_SchoolIcons from './A_SchoolIcons.js'
import A_PostImage from './A_PostImage.js'
import A_PlayBtn from './A_PlayBtn.js'
import A_Like from './A_Like.js'
import A_Likes from './A_Likes.js'
import A_Video from './A_Video.js'
import A_Iframe from './A_Iframe.js'


const M_PostPreview = ({
  postImg,
  name,
  descript,
  iconsChildren,
  categoryName,
  playBtn,
  iframe,
  vidSrc,
  vidWidth,
  vidHeight
}) => {
  return(
    <div className='postPreview'>

      <A_PostImage src={postImg}/>
      <A_Video iframe={iframe}/>

      <div className='catPlay'>
        <A_CategoryName
        children = {categoryName}
        categoryStyle = 'category--inPost'
        />
        <A_PlayBtn>
          {playBtn}
        </A_PlayBtn>
      </div>
      <div className ='underPic'>
        <A_Textblock
        headingSize ='heading--h5'
        headingStyle ='heading--black'
        type = 'span'
        >
        {name}
        </A_Textblock>

        <A_SchoolIcons>
        </A_SchoolIcons>

        <A_Textblock
        headingSize ='heading--small-descript'
        headingStyle ='heading--gray'
        type = 'span'>
        {descript}
        </A_Textblock>

        <A_Like/>
        <A_Likes/>

        <A_Iframe
          vidSrc ={vidSrc}
          vidWidth ={vidWidth}
          vidHeight ={vidHeight}
        />

      </div>

    </div>
  )
}


export default M_PostPreview
