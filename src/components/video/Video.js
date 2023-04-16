import React, { useEffect, useState } from 'react'
import "./_video.scss"

import { AiFillEye } from 'react-icons/ai'
import request from '../../api'
import moment from 'moment/moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useNavigate } from 'react-router-dom'


 

const Video = ({ video }) => {

  const { id, snippet: { channelId, channelTitle, title, publishedAt, thumbnails: { medium } } } = video

  const [views, setViews] = useState(null)
  const [duration, setDuration] = useState(null)
  const [channelIcon, setChannelIcon] = useState(null)

  const seconds = moment.duration(duration).asSeconds()
  const _duration = moment.utc(seconds * 1000).format("mm:ss")

  const _videoId = id?.videoId || id;

  const navigate = useNavigate()


  useEffect(() => {
    const get_video_details = async () => {
      const { data: { items } } = await request('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: { _videoId },
        }
      }[_videoId])
      setDuration(items[0].contentDetails.duration)
      setViews(items[0].statistics.viewCount)
    }
    get_video_details()
  }, [id])

  useEffect(() => {
    const get_channel_icon = async () => {
      const { data: { items } } = await request('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        }
      })
      setChannelIcon(items[0].snippet.thumbnails.default)
    }
    get_channel_icon()
  }, [channelId])


  const handleVideoClick = () => {
    navigate(`/watch/${_videoId}`)
  }



  return (
    <div className='video' onClick={handleVideoClick}>
      <div className='video_top'>
        {/* <img src={medium.url} alt='' /> */}
        <LazyLoadImage src={medium.url} effect='blur' />
        <span className='video_top_duration'>{_duration}</span>
      </div>
      <div className='video_title'>
        {title}
      </div>
      <div className='video_details'>
        <span>
          <AiFillEye /> {numeral(views).format("0.a")} Views •
        </span>
        <span>{moment(publishedAt).fromNow()}</span>
      </div>
      <div className='video_channel'>
        {/* <img src={channelIcon?.url} alt='' /> */}
        <LazyLoadImage src={channelIcon?.url} effect='blur' />
        <p>{channelTitle}</p>
      </div>
    </div>
  )
}

export default Video

