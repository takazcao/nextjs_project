// import Image from "next/image";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <h1 className="primary-text-gradient">Hello this is main page</h1>
      <button className="btn primary-text-gradient p-5 background-light700_dark300">
        {" "}
        Click me
      </button>
      <div className="max-w-sm rounded-lg bg-white shadow-md p-6">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-gray-600 mb-4">
          This is a basic card component using Tailwind CSS. You can put any
          content here.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Action
        </button>
      </div>
      <Loading />
    </>
  );
}
