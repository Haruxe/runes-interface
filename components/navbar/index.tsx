"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-zinc-600 rounded-b-3xl flex justify-between place-items-center">
      <div className="flex p-5 max-w-6xl">
        <div className="flex gap-3 place-items-center">
          <Link href='/'>
            <Image
              src="/images/logo.png"
              className="rounded-full px-4 bg-white"
              alt="logo"
              width={180}
              height={40}
            />
          </Link>
          <div className="px-6 py-2 rounded-full outline outline-1 lg:flex hidden">
            <h1 className="text-sm">RUNESCAN</h1>
          </div>
          <div className="px-6 py-2 rounded-full outline outline-1 lg:flex hidden">
            <h1 className="text-sm">RUNES ETCHER</h1>
          </div>
          <div className="px-6 py-2 rounded-full outline outline-1 lg:flex hidden">
            <h1 className="text-sm">RUNES BOOK</h1>
          </div>
        </div>
        <div></div>
      </div>
      <div className="p-5 flex space-x-4 place-items-center">
      <div className="px-8 py-2 rounded-full outline outline-1 lg:flex hidden">
            <h1 className="text-lg font-bold">Blog</h1>
          </div>
         <Link href='/app' className="px-4 cursor-pointer py-2 rounded-full bg-[#2207E0]">
            <h1 className="text-lg font-bold">Launch App</h1>
          </Link>
          <div className="p-3 rounded-full outline outline-1 lg:hidden flex">
            <Image src='/images/ham.png' alt='hamburger' width={15} height={15} />
          </div>
      </div>
    </nav>
  );
}
