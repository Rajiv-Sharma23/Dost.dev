import AddPost from "@/components/AddPost";
import Feed from "@/components/feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Stories from "@/components/Stories";




const HomePage = () => {
  return (
    <div className="flex">
      {/* left */}
      <div className="hidden xl:block w-[20%]"><LeftMenu type="home"/></div>
      {/* center */}
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <Stories/>
          <AddPost/>
          <Feed/>

        </div>
      </div>
      {/* right */}
      <div className="hidden lg:block w-[30%]"><RightMenu userId=""/></div>
    </div>
  )
}

export default HomePage