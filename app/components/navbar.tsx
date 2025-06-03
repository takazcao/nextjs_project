import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex-between w-full fixed top-0 left-0 right-0 z-50 gap-5 p-6 shadow-light-100 dark:shadow-dark-100 sm:px-12 background-light900_dark200">
      <Link href="/" className="flex items-center gap-1">
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <div className="flex-between gap-5">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6">
          <Link
            href="/"
            className="base-medium text-dark300_light700 hover:text-primary-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/community"
            className="base-medium text-dark300_light700 hover:text-primary-500 transition-colors"
          >
            Community
          </Link>
          <Link
            href="/collection"
            className="base-medium text-dark300_light700 hover:text-primary-500 transition-colors"
          >
            Collections
          </Link>
          <Link
            href="/jobs"
            className="base-medium text-dark300_light700 hover:text-primary-500 transition-colors"
          >
            Find Jobs
          </Link>
          <Link
            href="/tags"
            className="base-medium text-dark300_light700 hover:text-primary-500 transition-colors"
          >
            Tags
          </Link>
          <Link
            href="/profile"
            className="base-medium text-dark300_light700 hover:text-primary-500 transition-colors"
          >
            Profile
          </Link>
          <Link
            href="/ask-question"
            className="base-medium text-dark300_light700 hover:text-primary-500 transition-colors"
          >
            Ask a Question
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button className="focus:outline-none">
            <svg
              className="w-6 h-6 text-dark300_light700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex-center gap-3">
          <Link
            href="/sign-in"
            className="btn-secondary small-medium min-h-[41px] rounded-lg px-4 py-3 shadow-none"
          >
            Log In
          </Link>
          <Link
            href="/sign-up"
            className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] rounded-lg border px-4 py-3 shadow-none"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
