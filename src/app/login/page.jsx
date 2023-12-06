"use client";

import Link from "next/link";

export default function LoginPage() {
  const handlelogin = (e) => {
    e.preventDefault();
    fetch(`/api/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email: e.currentTarget.email.value,
        password: e.currentTarget.password.value,
      }),
    });
  };
  return (
    <div className="h-screen w-100 flex justify-center items-center">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={(e) => handlelogin(e)}>
          <h3 className="text-2xl font-medium text-gray-900 dark:text-white">
            Get Started
          </h3>
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Email<span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
            >
              Password<span className="text-red-700">*</span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <Link
            href="/conten"
            type="submit"
            className="w-full text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          >
            Login
          </Link>
          <div className=" text-sm font-medium text-gray-500 dark:text-gray-300">
            <Link
              href="/register"
              className="flex justify-center items-center text-red-700 hover:underline dark:text-red-500"
            >
              REGISTER NOW
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
