import React from 'react'
import numeral from 'numeral'
import moment from 'moment'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import './_videoMetaData.scss'
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {


    const { channelId, channelTitle, description, title, publishedAt } = snippet
    const { viewCount, likeCount, dislikeCount } = statistics



    return (
        // padding top and bottom(py - 2)
        <div className='videoMetaData py-2'>
            <div className='videoMetaData_top'>
                <h5>{title}</h5>
                <div className='d-flex justify-content-between align-item-center py-1'>
                    <span>
                        {numeral(viewCount).format("0.a")} Views • {moment(publishedAt).fromNow()}

                    </span>
                    <div>
                        <span style={{ margin: '0 20px' }}>
                            <MdThumbUp size={26} />{numeral(likeCount).format("0.a")}
                        </span>
                        <span>
                            <MdThumbDown size={26} />{numeral(dislikeCount).format("0.a")}
                        </span>
                    </div>
                </div>
            </div>

            <div className='videoMetaData_channel d-flex justify-content-between align-item-center my-2 py-3'>
                <div className='d-flex'>
                    <img
                        src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                        alt=''
                        className='rounded-circle mr-3'
                    />
                    <div className='d-flex flex-column'>
                        <span>{channelTitle}</span>
                        <sapn>{numeral(100000).format("0.a")} Subscribers</sapn>
                    </div>
                </div>
                <button className='btn border-0 p-2 py-1 m-2'>Subscribe</button>
            </div>

            <div className='videoMetaData_description'>
                <ShowMoreText
                    lines={3}
                    more='SHOW MORE'
                    less='SHOW LESS'
                    anchorClass='showMoreText'
                    expanded={false}
                >
                    {
                        description
                    }
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData
