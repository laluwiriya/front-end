"use client";
import Link from "next/link";
import { useRef } from "react";
import Spin from "react-reveal/Spin";
import Fade from "react-reveal/Fade";
import Rotate from "react-reveal/Rotate";
import { ArrowLeft, ArrowRight, ShoppingBag } from "@phosphor-icons/react";
const Page = () => {
  return (
    <div className="w-full left-0 m-0 flex relative  bg-white md:w-[1280px] h-[790px]">
      <div className=" hidden md:w-[1177px] md:top-[-645px]  md:h-[1177px] md:left-[283px] absolute md:bg-orange-100 md:rounded-full md:flex" />
      <div className="w-[1280px] h-[790px] absolute bg-white" />
      <div className="w-[1177px] h-[1177px] left-[283px] top-[-645px] absolute ">
        <div className="hidden md:flex md:top-0 absolute md:bg-orange-100 md:rounded-full md:w-[1177px] md:h-[1177px] md:left-0">
          <div className="w-[648.74px] h-[652.74px] left-[266px] top-[845px] absolute">
            <div className="w-[560px] h-[560px] left-[43px] top-[52px] absolute rounded-full border-dashed border-2 border-orange-500" />
            <Rotate top right>
              <div className="w-[100.74px] h-[100.74px] left-[548px] top-[213px] absolute">
                <div className="w-[100.74px] h-[100.74px] left-0 top-0 absolute bg-stone-300 rounded-full shadow object-cover">
                  <img className="rounded-full" src="/4.png" />
                </div>
              </div>
            </Rotate>

            <Rotate top right>
              <div className="w-[97px] h-[99px] left-[450px] top-[61px] absolute">
                <div className="w-[94px] h-[94px] left-[2px] top-[2px] absolute bg-stone-300 rounded-full shadow object-cover">
                  <img className="rounded-full" src="/img2.png" />
                </div>
              </div>
            </Rotate>

            <Rotate top right>
              <div className="w-[97px] h-[99px] left-[98px] top-[61px] absolute">
                <div className="w-[94px] h-[94px] left-[2px] top-[2px] absolute bg-stone-300 rounded-full shadow object-cover">
                  <img className="rounded-full" src="/i1.png" />
                </div>
              </div>
            </Rotate>
            <Rotate top right>
              <div className="w-[97px] h-[99px] left-0 top-[214px] absolute">
                <div className="w-[94px] h-[94px] left-[2px] top-[2px] absolute bg-stone-300 rounded-full shadow object-cover">
                  <img className="rounded-full" src="/3.png" />
                </div>
              </div>
            </Rotate>

            <Rotate top right>
              <div className="w-[97px] h-[99px] left-[274px] top-0 absolute object-cover">
                <div className="w-[94px] h-[94px] left-[2px] top-[2px] absolute bg-stone-300 rounded-full shadow object-cover ">
                  <img className="rounded-full" src="/2.png" />
                </div>
              </div>
            </Rotate>
          </div>
        </div>
      </div>
      <Fade big>
        <div className="justify-start items-center top-[368px] md:w-[289px] md:h-[294.96px] md:left-[727px] md:top-[368px] absolute">
          <div className="w-[81.89px] h-[81.89px] left-[104.47px] top-[107.05px] absolute hidden md:flex">
            <div className="w-[81.89px] h-[81.89px] left-0 top-0 absolute bg-stone-300 rounded-full shadow-md" />
            <div className="w-[81.89px] h-[81.89px] left-0 top-0 absolute bg-stone-300 rounded-full shadow-md" />
          </div>
          <Spin>
            <div className="w-[289px] h-[294.96px] left-0 top-0 absolute">
              <div className="w-[130px] top-1 h-[130px] right-[40px] md:w-[280.06px] md:h-[280.06px] md:left-[5.96px] md:top-[5.96px] absolute md:bg-stone-300 md:rounded-full md:shadow-md md:object-cover">
                <img className="rounded-full" src="/2.png" />
              </div>
            </div>
          </Spin>
        </div>
      </Fade>
      <Fade left>
        <div className="w-[167px] h-[100px] left-[30px] top-[90px] flex-wrap absolute md:w-[367px] md:h-[238px] md:left-[100px] md:top-[276px]">
          <div className="left-0 top-10 md:top-5 absolute text-orange-400 text-xl font-semibold font-['Poppins'] capitalize md:text-[44px]">
            Rp 23.000
          </div>
          <div className="w-[367px] left-0 top-[76px] absolute text-zinc-800 text-lg font-['Poppins'] capitalize leading-[50px] font-semibold md:text-4xl md:flex">
            Salad Timun Dan
            <span className="w-[367px] left-0 top-[36px] absolute text-zinc-800 text-lg font-['Poppins'] capitalize leading-[50px] font-semibold md:text-4xl md:flex">
              Udang Segar
            </span>
          </div>
          <div className="w-[347px] left-0 top-[178px] absolute text-zinc-800 text-md font-normal font-['Poppins'] capitalize md:text-[13]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            consectetur odio ducimus laboriosam vero dolores?
          </div>
        </div>
        <div className="top-[600px] w-[163px] h-12 left-[100px] md:top-[552px] absolute">
          <div className="w-[163px] h-12 left-0 top-0 absolute bg-orange-400 rounded-[69px] shadow" />
          <div className="w-2.5 h-0.5 left-[153px] top-[24px] absolute bg-lime-600 bg-opacity-0 rounded-[69px] shadow" />
          <div className="left-[31.50px] top-[14px] absolute text-white text-[13px] font-bold font-['Poppins'] capitalize">
            BELI SEKARANG
          </div>
        </div>
      </Fade>
      <div className="top-[597px] left-[250px] w-5 h-5 md:origin-top-left md:w-10 md:h-10 md:left-[1120px] md:top-[670px] absolute">
        <div className="w-10 h-10 left-0 -top-20 absolute origin-top-left bg-orange-400 rounded-full shadow-md">
          <Link
            href="/componen/conten3"
            className="text-white"
            onClick={() => goto(linkRef.current)}
          >
            <ArrowRight size={32} />
          </Link>
        </div>
      </div>
      <div className=" top-[597px] left-[70px]  origin-top-left w-10 h-10 md:left-[578px] md:top-[670px] absolute">
        <div className="w-10 h-10 left-0 -top-20 absolute origin-top-left bg-orange-400 rounded-full shadow-md">
          <Link
            href="/"
            className="text-white"
            onClick={() => goto(linkRef.current)}
          >
            <ArrowLeft size={32} />
          </Link>
        </div>
      </div>
      <div className="opacity-0 w-[63px] h-[176.13px] left-[100px] top-[303px] absolute">
        <div className="w-3 h-[9.43px] left-0 top-0 absolute text-lime-600 text-[6.29px] font-semibold font-['Poppins'] capitalize">
          $35
        </div>
        <div className="w-[58px] h-[15.80px] left-[5px] top-[71px] absolute text-zinc-800 text-[5.69px] font-medium font-['Poppins'] capitalize leading-[7.90px]">
          Asian Cucumber Salad
        </div>
        <div className="w-[47px] h-[8.13px] left-0 top-[168px] absolute text-zinc-800 text-[1.76px] font-normal font-['Poppins'] capitalize">
          Asian Cucumber Salad Recipe made with crunchy cucumber, onion, rice
          wine vinegar, and a few secret ingredients!
        </div>
      </div>
      <div className="w-[1080px] h-[27px] left-[100px] top-[47px] absolute">
        <div className="w-[367px] h-[21px] left-[275px] top-[5px] absolute hidden md:flex">
          <div className=" left-0 top-0 absolute text-zinc-800 text-sm font-medium font-['Poppins'] capitalize hover:text-orange-500">
            <Link href="/">Sarapan</Link>
          </div>
          <div className="left-[127px] top-0 absolute text-zinc-800 text-sm font-medium font-['Poppins'] capitalize hover:text-orange-500">
            <Link href="/componen/conten2">Makan Siang</Link>
          </div>
          <div className="left-[265px] top-0 absolute text-zinc-800 text-sm font-medium font-['Poppins'] capitalize hover:text-orange-500">
            <Link href="/componen/conten3">makan Malam</Link>
          </div>
        </div>
        <div className="w-5 h-[22px] left-[230px] md:left-[1060px] top-[0px] absolute">
          <ShoppingBag size={32} />
          <div className="w-1.5 h-1.5 left-[14px] top-[16px] absolute bg-orange-400 rounded-full" />
        </div>
        <div className="w-[92px] h-[12px] left-0 top-0 inline absolute md:w-[92px] h-[27px] left-0 top-0">
          <div className="text-orange-700 -left-16 top-0 absolute md:text-zinc-800 text-lg font-bold font-['Poppins'] capitalize md:text-lg">
            Food Ajah
          </div>
        </div>
      </div>
      <div className="left-[60px] md:left-[100px] top-[742px] absolute text-black text-[13.16px] font-normal font-['Poppins'] capitalize">
        Butuh menu lain?
      </div>
    </div>
  );
};
export default Page;
