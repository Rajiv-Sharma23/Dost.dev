import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className='bg-pink-100 shadow-md p-4 rounded-lg'>
        {/* user */}
        <div className='flex justify-between'>
          <div className="flex items-center gap-4 ">
              <Image src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_640.jpg" alt="avatar" width={1024} height={1024} className='w-12 h-12 rounded-full object-cover' />

              <span className='font-medium'>Rajiv Sharma</span>

          </div>
          
          <Image src= "/more.png" alt="more" width={13} height={13} className='w-4 h-4 cursor-pointer'/>
        </div>

        {/* description */}
        <div className="flex flex-col gap-4">
            <div className='w-full h-96 relative pt-3 '>
                <Image src="https://cdn.pixabay.com/photo/2018/11/08/23/52/man-3803551_640.jpg" alt="avatar" width={1024} height={1024} className='w-full h-full object-cover rounded-lg' />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita facilis dolor pariatur, magni inventore commodi earum quibusdam consequatur corporis quasi facere vel tenetur! Delectus eligendi obcaecati tempore eos commodi necessitatibus?</p>
        </div>
        {/* Interaction */}
        <div className=""></div>
    </div>
  )
}

export default Post