"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter(false);

  const handleClick = () => {
    Swal.fire({
      title: "Log Out!",
      text: "Kamu Berhasil Keluar.",
      icon: "success",
    });
  };

  return (
    <nav className="flex w-full bg-white py-1 md:py-8 px-2 justify-between space-x-4 md:px-5 border-b-2 fixed">
      <div className="flex flex-wrap">
        <img
          className="flex w-7 h-7 mt-3 justify-center items-center ml-6 md:w-10 md:h-10 object-cover "
          src="/1.png"
        />

        <div className="px-3 ml-3 py-2 md:px-10 md:ml-10">
          <input
            className="w-40 h-7 bg-slate-100 rounded-md md:w-96 md:h-14 md:rounded-3xl"
            type="text"
            placeholder="Input QR Code Number"
          />
        </div>
        <div className="px-3 ml-16 py-2 md:ml-3">
          <button className="w-40 h-7 bg-red-700 text-white rounded-md md:w-40 md:h-14 md:rounded-3xl">
            Generate
          </button>
        </div>
        <div className="flex-wrap ml-0 md:ml-80">
          <h4 className="text-black text-md font-sm font-['Poppins'] md:font-normal md:text-left">
            03 April 2023, 15:00PM
          </h4>
          <h2 className="text-left text-black text-md font-bold font-['Poppins'] md:text-3xl">
            Daily Order
          </h2>
        </div>
      </div>

      <div className=" w-16 md:w-28 h-screen -left-4 top-[200px] px-5 md:top-[135px] absolute bg-white justify-start border-r-2">
        <div className="flex ml-1 md:ml-6 left-0 top-[70px] absolute text-center text-zinc-400 text-base font-medium font-['Poppins']">
          <span className="flex flex-wrap">
            <img className="ml-1" src="/ic1.svg" alt="" /> {"  "}
          </span>
          <h1 className="flex left-0 top-[30px] absolute text-center text-zinc-400 text-base font-medium font-['Poppins']">
            MENU
          </h1>
        </div>
        <div className="flex ml-1 md:ml-6 left-0 top-[170px] absolute text-center text-zinc-400 text-base font-medium font-['Poppins']">
          <span className="flex flex-wrap">
            <img className="ml-1" src="/ic2.svg" alt="" /> {"  "}
          </span>
          <h1 className="flex left-0 top-[30px] absolute text-center text-zinc-400 text-base font-medium font-['Poppins']">
            SALES
          </h1>
        </div>
        <button onClick={handleClick}>
          <div
            onClick={() => {
              router.push("/login");
            }}
            className="flex ml-1 md:ml-6 left-0 top-[170px] bottom-0 absolute text-center text-zinc-400 text-base font-medium font-['Poppins'] "
          >
            <span className="flex flex-wrap">
              <img className="ml-1" src="/ic3.svg" alt="" /> {"  "}
            </span>
            <h1
              onClick={handleClick}
              href="/login"
              className="flex left-0 top-[400px] md:top-[260px] bottom-0 absolute text-center text-zinc-400 text-base font-medium font-['Poppins'] hover:text-red-700 hover:font-bold"
            >
              Log Out
            </h1>
          </div>
        </button>
      </div>
    </nav>
  );
}
