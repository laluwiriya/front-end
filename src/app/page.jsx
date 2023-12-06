import Link from "next/link";

const Page = () => {
  return (
    <div className="h-screen w-100 flex justify-center items-center">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="/loading.png"
          alt=""
          width={200}
          height={200}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            PT. Tavia Digital Solusi
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Silahkan Log In Terlebih dahulu
        </p>
        <Link
          href="/login"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Continue
        </Link>
      </div>
    </div>
  );
};
export default Page;
