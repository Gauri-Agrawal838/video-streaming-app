import React from 'react'
import './_comment.scss'
import moment from 'moment'

const Comment = () => {
    return (
        <div className='comment p-2 d-flex'>
            <img
                src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                alt=''
                className='rounded-circle mr-3'
            />
            <div className='comment_body'>
                <p className='comment_header mb-1'>Lokesh Sharma • {moment('2021-10-14').fromNow()}</p>
                <p className='mb-0'>Nice Video</p>
            </div>
        </div>
    )
}

export default Comment
