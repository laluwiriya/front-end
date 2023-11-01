import React from "react";
import Conten from "./conten/page";
import Link from "next/link";

export const Home = () => {
  return (
    <div className="justify-center items-center flex h-screen">
      <div className="max-w-sm bg-orange-300 border flex border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700  ">
        <a href="#">
          <img className="rounded-t-lg" src="/i1.png" alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Food Ajah
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Di Food Ajah Menyediakan berbagai menu
          </p>
          <Link
            href="/conten"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Lihat Menu
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
