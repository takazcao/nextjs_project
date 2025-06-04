// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="mt-20 p-8">
        <h1 className="primary-text-gradient">Home</h1>
        <Link href="/profile/about"> Profile page </Link>
      </div>
    </>
  );
}
