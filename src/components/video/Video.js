import React from 'react'
import "./_video.scss"

import { AiFillEye } from 'react-icons/ai'

const Video = () => {
  return (
    <div className='video'>
      <div className='video_top'>
        <img src='https://i.ytimg.com/vi/K8YELRmUb5o/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFTyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsi38ZJPcgw50UYWxwqq62t8KVxQ' alt='' />
        <span>05:43</span>
      </div>
      <div className='video_title'>
        Learn MERN Stack in 1 hour by Lokesh Sharma
      </div>
      <div className='video_details'>
        <span>
          <AiFillEye /> 10m Views •
        </span>
        <span> 2 hours ago</span>
      </div>
      <div className='video_channel'>
        <img src='https://yt3.ggpht.com/lr5IfCkdxj_nAR1t1ZKY_3l1x2ZU1SFJw7Ig7jVhwr2NQtU5ADqkL2DxF1ghH94nyRKdG546V6Y=s68-c-k-c0x00ffffff-no-rj' alt='' />
        <p>FullStack Development</p>
      </div>
    </div>
  )
}

export default Video
