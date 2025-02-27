import Image from 'next/image'
import Link from 'next/link'


const UserInformationCard = ({userId}:{userId:string}) => {
  return (
    <div className="bg-white  flex flex-col gap-4 shadow-md p-4 rounded-lg ">
    {/* top */}
    <div className="flex justify-between">
      <span className="font-semibold">User Info</span>
      <Link
        href={"/"}
        className="text-pink-600 text-xs bg-pink-200 rounded-md p-1 "
      >
        see all
      </Link>
    </div>
    {/* Bottom */}
    <div className='flex flex-col gap-4 text-gray-500'>
        <div className='flex items-center gap-2'>
            <span className='text-xl text-black'>Rajiv Sharma</span>
            <span className='text-sm text-pink-600 pt-1'>@rajivsharma</span>
        </div>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat ipsum dolor sit amet</p>
        <div className="flex items-center gap-4">
            <Image src={"/map.png"} width={50} height={50} alt='map' className='w-4 h-4'/>
            <span className='text-sm'>Lives in <b>Jamshedpur</b></span>
        </div>
        <div className="flex items-center gap-4">
            <Image src={"/school.png"} width={50} height={50} alt='school' className='w-4 h-4'/>
            <span className='text-sm'>Went to <b>G.P Latehar</b></span>
        </div>
        <div className="flex items-center gap-4">
            <Image src={"/work.png"} width={50} height={50} alt='work' className='w-4 h-4'/>
            <span className='text-sm'>Works at <b>Self Employed</b></span>
        </div>
        <div className='flex items-center justify-between text-sm'>
            <div className='flex gap-1 items-center'>
            <Image src={"/link.png"} width={50} height={50} alt='link' className='w-4 h-4'/>
            <Link href={"https://rajiv.dev"} className='text-blue-500 font-medium'>rajiv.dev</Link>
            </div>
            <div className='flex gap-1 items-center'>
            <Image src={"/date.png"} width={50} height={50} alt='github' className='w-4 h-4'/>
            <span >Joined November 2024</span>
            </div>
        </div>
        <button className='bg-pink-500 text-white px-2 py-1 rounded-md'>Follow</button>
        <span className='text-red-600 self-end text-xs'>Block User</span>
    </div>
    </div>
)
}

export default UserInformationCard
     
      // 