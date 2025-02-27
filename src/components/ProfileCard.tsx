import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6">
      <div className="h-20 relative">
        <Image
          src="https://cdn.pixabay.com/photo/2022/09/02/06/41/kids-7426797_640.jpg"
          alt=""
          fill
          className="rounded-md object-cover "
        />
        <Image
          src="https://cdn.pixabay.com/photo/2023/03/10/17/10/holi-7842792_640.jpg"
          alt=""
          width={480}
          height={480}
          className="w-12 h-12 rounded-full absolute left-0 right-0 m-auto -bottom-6 object-cover ring-2 ring-gray-200"
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="font-semibold">Rajiv Sharma</span>
        <div className="flex items-center ">
          <Image  src="https://cdn.pixabay.com/photo/2023/03/10/17/10/holi-7842792_640.jpg"
          alt=""
          width={48}
          height={48}
          className="w-3 h-3 rounded-full object-cover"/>
          <Image  src="https://cdn.pixabay.com/photo/2023/03/10/17/10/holi-7842792_640.jpg"
          alt=""
          width={48}
          height={48}
          className="w-3 h-3 rounded-full object-cover"/>
          <Image  src="https://cdn.pixabay.com/photo/2023/03/10/17/10/holi-7842792_640.jpg"
          alt=""
          width={48}
          height={48}
          className="w-3 h-3 rounded-full object-cover"/>
          <span className="text-gray-500 pl-3 ">500 followers</span>
        </div>
        <button className="bg-pink-500 text-white px-2 py-1 rounded-md">My Profile</button>
      </div>
    </div>
  );
};

export default ProfileCard;
