import React from 'react'
import { CommentType } from '../Utils/Types'

type Props = {
    comments:CommentType[]
}

const Comments = ({comments}: Props) => {
  return (
    <>
    {
        comments.map((comment: CommentType) => {
          return (
            <div className='border border-gray-200 px-3 py-2 mt-2'>
              <div className='font-semibold'><span className='text-lg'>User: </span>{comment.name}</div>
              <div className=''>{comment.body}</div>
            </div>
          );
        })}</>
  )
}

export default Comments