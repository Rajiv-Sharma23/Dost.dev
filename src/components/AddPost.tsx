import Image from 'next/image'
import React from 'react'

const AddPost = () => {
  return (
    <div className='bg-white shadow-lg p-2 rounded-lg flex gap-4 justify-between text-sm flex-wrap'>
      {/* avatar */}
      <div className="flex items-center self-start mt-2">
        <Image src="/next.svg" alt="avatar" width={50} height={50} className='w-12 h-12 rounded-full p-1 bg-green-300' />
      </div>
      {/* post */}
      <div className="flex flex-col flex-1 p-1">
        {/* Text Input */}
        <div className="flex flex-1 gap-2 ">
          <textarea className="w-full p-2 bg-slate-100 rounded-lg focus-visible:bg-gray-200 focus-visible:outline-dashed focus-visible:outline-2  focus-visible:outline-pink-600" placeholder="What's on your mind? "></textarea>
          <Image src="/emoji.png"  alt='emoji' width={20} height={20} className='w-4 h-4  cursor-pointer self-end'/>
        </div>
        {/* Options */}
        <div className="flex items-center gap-4 mt-4 text-gray-500 flex-wrap">
          <div className='flex items-center gap-2 cursor-pointer '>
          <Image src="/addimage.png"  alt='emoji' width={20} height={20} className='w-4 h-4  cursor-pointer '/>
          Photo
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addVideo.png"  alt='emoji' width={20} height={20} className='w-4 h-4  cursor-pointer '/>
          Video
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/poll.png"  alt='emoji' width={20} height={20} className='w-4 h-4  cursor-pointer '/>
          Poll
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
          <Image src="/addevent.png"  alt='emoji' width={20} height={20} className='w-4 h-4  cursor-pointer '/>
          Event
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default AddPost