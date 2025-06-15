import Link from "next/link";
import React from "react";
import Image from "next/image";
import Theme from "./Theme";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 dark:shadow-none sm:px-12 ">
      <Link href="/" className="flex item-center gap-1">
        <Image
          src="/images/site-logo.svg"
          width={23}
          height={23}
          alt="Dev logo"
        />
        <p className="h2-bold text-dark100_light900 max-sm:hidden ">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      <p>Global search</p>
      <h1 className="text-primary-500 text-3xl font-bold underline ">
        Hello, Next.js!
      </h1>
      <div className="flex-between g-5">
        <Theme />
      </div>
    </nav>
  );
};
export default Navbar;
