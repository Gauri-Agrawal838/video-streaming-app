import React from 'react'
import numeral from 'numeral'
import moment from 'moment'
import { MdThumbUp, MdThumbDown } from 'react-icons/md'
import './_videoMetaData.scss'
import ShowMoreText from 'react-show-more-text'

const VideoMetaData = () => {
    return (
        // padding top and bottom(py - 2)
        <div className='videoMetaData py-2'>
            <div className='videoMetaData_top'>
                <h5>Video Title</h5>
                <div className='d-flex justify-content-between align-item-center py-1'>
                    <span>
                        {numeral(100000).format("0.a")} Views •
                        {moment('2022-08-05').fromNow()}
                    </span>
                    <div>
                        <span style={{ margin: '0 20px' }}>
                            <MdThumbUp size={26} />{numeral(100000).format("0.a")}
                        </span>
                        <span>
                            <MdThumbDown size={26} />{numeral(100000).format("0.a")}
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
                        <span>Channel Name</span>
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
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet a mollitia, iste eius dicta, velit minima, veniam quaerat debitis distinctio architecto id quidem. Quisquam officiis reprehenderit similique incidunt quidem quo nostrum perspiciatis, illum ea dicta quas commodi exercitationem! Officiis odit, deleniti veniam ex amet consequuntur? Sit quas quidem dolore!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet a mollitia, iste eius dicta, velit minima, veniam quaerat debitis distinctio architecto id quidem. Quisquam officiis reprehenderit similique incidunt quidem quo nostrum perspiciatis, illum ea dicta quas commodi exercitationem! Officiis odit, deleniti veniam ex amet consequuntur? Sit quas quidem dolore!
                </ShowMoreText>
            </div>
        </div>
    )
}

export default VideoMetaData
