"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-zinc-600 rounded-b-3xl">
      <div className="flex p-5 mx-auto max-w-6xl">
        <div className="flex gap-3 place-items-center">
          <div>
            <Image
              src="/images/logo.png"
              className="rounded-full px-4 bg-white"
              alt="logo"
              width={180}
              height={40}
            />
          </div>
          <div className="px-6 py-2 rounded-full outline outline-1">
            <h1 className="text-sm">RUNESCAN</h1>
          </div>
          <div className="px-6 py-2 rounded-full outline outline-1">
            <h1 className="text-sm">RUNES ETCHER</h1>
          </div>
          <div className="px-6 py-2 rounded-full outline outline-1">
            <h1 className="text-sm">RUNES BOOK</h1>
          </div>
        </div>
        <div></div>
      </div>
    </nav>
  );
}
