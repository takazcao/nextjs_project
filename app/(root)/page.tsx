// import Image from "next/image";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <div className="mt-20 p-8">
        <h1 className="primary-text-gradient">Home</h1>
        <Loading />
      </div>
    </>
  );
}
