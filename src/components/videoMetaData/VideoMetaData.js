import React, { useEffect } from 'react'
import './_videoMetaData.scss'
import moment from 'moment'
import numeral from 'numeral'

import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import ShowMoreText from 'react-show-more-text'
import { useDispatch, useSelector } from 'react-redux'
import {
   checkSubscriptionStatus,
   getChannelDetails,
} from '../../redux/actions/channel.action'
import { useState } from 'react'
// import HelmetCustom from '../HelmetCustom'


const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
   const { channelId, channelTitle, description, title, publishedAt } = snippet
   const { viewCount, likeCount, dislikeCount } = statistics

   const dispatch = useDispatch()

   const {
      snippet: channelSnippet,
      statistics: channelStatistics,
   } = useSelector(state => state.channelDetails.channel)

   const [subscriptionStatus, setSubScriptionStatus] = useState(useSelector(
      state => state.channelDetails.subscriptionStatus
   ))

   const handleSubValue = () => {
      setSubScriptionStatus(!subscriptionStatus)
   }

   const [isLiked, setLike] = useState(false)

   const handleLike = () => {
      setLike(!isLiked)
   }


   useEffect(() => {
      dispatch(getChannelDetails(channelId))
      dispatch(checkSubscriptionStatus(channelId))
   }, [dispatch, channelId])

   return (
      <div className='py-2 videoMetaData'>
         {/* <HelmetCustom title={title} description={description} /> */}

         <div className='videoMetaData_top'>
            <h5>{title}</h5>
            <div className='py-1 d-flex justify-content-between align-items-center'>
               <span>
                  {numeral(viewCount).format('0.a')} Views •{' '}
                  {moment(publishedAt).fromNow()}
               </span>

               <div>
                  <span className='mr-3'>
                     <MdThumbUp size={26} className={isLiked ? 'like' : 'dislike'} onClick={handleLike} /> {numeral(likeCount).format('0.a')}
                  </span>

               </div>
            </div>
         </div>
         <div className='py-3 my-2 videoMetaData_channel d-flex justify-content-between align-items-center'>
            <div className='d-flex'>
               <img
                  src={channelSnippet?.thumbnails?.default?.url}
                  alt=''
                  className='mr-3 rounded-circle'
               />
               <div className='d-flex flex-column'>
                  <span>{channelTitle}</span>
                  <span>
                     {' '}
                     {numeral(channelStatistics?.subscriberCount).format(
                        '0.a'
                     )}{' '}
                     Subscribers
                  </span>
               </div>
            </div>

            <button onClick={handleSubValue}
               className={`p-2 m-2 border-0 btn ${subscriptionStatus ? 'subscribe' : 'subscribe nots'
                  }`}>
               {subscriptionStatus ? 'Subscribed' : 'Subscribe'}
            </button>
         </div>
         <div className='videoMetaData_description'>
            <ShowMoreText
               lines={3}
               more='SHOW MORE'
               less='SHOW LESS'
               anchorClass='showMoreText'
               expanded={false}>
               {description}
            </ShowMoreText>
         </div>
      </div>
   )
}

export default VideoMetaData