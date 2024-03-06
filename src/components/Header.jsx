import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
export default function Header() {
  return (
    <div className="w-full h-[3rem] flex flex-row sm:h-[5rem] bg-white">
      <div className="hidden flex-1 md:flex justify-center">
        <SocialMedia color={"#6c6c6c"}></SocialMedia>
      </div>
      <div className="flex-1">
        <Navbar></Navbar>
      </div>
    </div>
  );
}
