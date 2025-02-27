import Link from "next/link"
import ProfileCard from "./ProfileCard"
import Image from "next/image"

const LeftMenu = ({type}:{type:"home" | "profile"}) => {
  return (
    <div className='flex flex-col gap-6 mr-4 mt-2 '>
      {type === "home" && <ProfileCard/>}
      <div className="p-4 bg-white rounded-lg shadow-md text-sm text-gray-500 flex flex-col gap-2">
        <Link href={"/"} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src={"/posts.png"}
        alt="posts"
        width={20}
        height={20}/>
        <span>Posts</span>
        </Link> 
        <hr className="border-t-slate-200 w-full self-center"/>
        <Link href={"/"} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src={"/activity.png"}
        alt="activity"
        width={20}
        height={20}/>
        <span>Activity</span>
        </Link> 
        <hr className="border-t-slate-200 w-full self-center"/>
        <Link href={"/"} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src={"/market.png"}
        alt="posts"
        width={20}
        height={20}/>
        <span>Market place</span>
        </Link> 
        <hr className="border-t-slate-200 w-full self-center"/>
        <Link href={"/"} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src={"/events.png"}
        alt="Events"
        width={20}
        height={20}/>
        <span>Posts</span>
        </Link> 
        <hr className="border-t-slate-200 w-full self-center"/>
        <Link href={"/"} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src={"/albums.png"}
        alt="albums"
        width={20}
        height={20}/>
        <span>Albums</span>
        </Link> 
        <hr className="border-t-slate-200 w-full self-center"/>
        <Link href={"/"} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src={"/videos.png"}
        alt="posts"
        width={20}
        height={20}/>
        <span>Videos</span>
        </Link> 
        <hr className="border-t-slate-200 w-full self-center"/>
        <Link href={"/"} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src={"/news.png"}
        alt="posts"
        width={20}
        height={20}/>
        <span>News</span>
        </Link> 
        <hr className="border-t-slate-200 w-full self-center"/>
        <Link href={"/"} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src={"/courses.png"}
        alt="posts"
        width={20}
        height={20}/>
        <span>Courses</span>
        </Link> 
        <hr className="border-t-slate-200 w-full self-center"/>
        <Link href={"/"} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src={"/lists.png"}
        alt="posts"
        width={20}
        height={20}/>
        <span>Lists</span>
        </Link> 
        <hr className="border-t-slate-200 w-full self-center"/>
        <Link href={"/"} className="flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100">
        <Image src={"/settings.png"}
        alt="posts"
        width={20}
        height={20}/>
        <span>Settings</span>
        </Link> 
        {/* <hr className="border-t-slate-200 w-full self-center"/> */}
      </div>
    </div>
  )
}

export default LeftMenu