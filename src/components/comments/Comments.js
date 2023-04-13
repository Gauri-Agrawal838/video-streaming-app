import React from 'react'
import './_comments.scss'
import Comment from '../comment/Comment'

const Comments = () => {

    const handleSubmit = () => {

    }

    return (
        <div className='comments'>
            <p>1234 Comments</p>
            <div className='comments_form d-flex w-100 my-2'>
                <img
                    src='https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'
                    alt=''
                    className='rounded-circle mr-3'
                />
                <form onSubmit={handleSubmit} className='d-flex flex-grow-1'>
                    <input type='text' className='flex-grow-1' placeholder='Write a comment...' />
                    <button className='border-0 p-2'>Comment</button>
                </form>
            </div>

            <div className='comments_list'>
                {
                    [...Array(15)].map(() => <Comment />)
                }
            </div>
        </div>
    )
}

export default Comments
