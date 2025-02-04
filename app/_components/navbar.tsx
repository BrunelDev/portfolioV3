import Link from "next/link";
export function Navbar() {
  return (
    <div className="border-b border-[#2F3335] py-3 px-4 sm:px-5 bg-[#47556900] backdrop-blur-lg flex flex-wrap mx-auto sm:mx-0 flex-row justify-between items-center w-full gap-3 sm:gap-0">
      <Link href="/" className="w-fit h-fit">
        <div className="relative w-fit py-2 px-6 rounded-full border-[2px] border-[#2F3335] flex space-x-3">
          <div className="h-3 w-3 bg-white rounded-full hover:bg-slate-700 duration-300 absolute top-1/2 -translate-y-1/2 left-3"></div>
          <h6>BrunelDev</h6>
        </div>
      </Link>
      <Link href="linkedin.com" className="w-fit h-fit">
        <div className="relative w-fit py-2 px-6 rounded-full border-[2px] border-[#2F3335] flex space-x-3">
          <div className="h-3 w-3 bg-white rounded-full hover:bg-slate-700 duration-300 absolute top-1/2 -translate-y-1/2 left-3"></div>
          <h6>Lets Connect</h6>
        </div>
      </Link>
    </div>
  );
}
