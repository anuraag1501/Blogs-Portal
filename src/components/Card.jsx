import React from 'react'

export const Card = ({post}) => {
  return (
    <div id={post.id}>
        <p className='font-bold text-lg'>{post.title}</p>
        <p className='text-sm mt-[4px]'>
            By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
        </p>
        <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
        <p className='text-md mt-[14px]'>{post.content}</p>

        <div className='flex gap-x-3'>
            {post.tags.map( (tag,index) => {
                return <span key={index} className='text-blue-700 font-bold underline text-xs mt[4px]'>{`#${tag}`}</span>
            })}
        </div>
    </div>
        )
}
