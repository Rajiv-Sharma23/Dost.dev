import { SignUp } from "@clerk/nextjs";

export default function page() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-96px)]">
      <SignUp />
    </div>
  );
}
