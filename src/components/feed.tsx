import React from 'react'
import Post from './Post'

const feed = () => {
  return (
    <div className='bg-white  flex flex-col gap-4 shadow-md p-4 rounded-lg'>
      <Post />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </div>
  )
}

export default feed