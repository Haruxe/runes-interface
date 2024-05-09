"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#9AEEB0] p-4 !mt-10 flex justify-between place-items-center">
        <Image src='/images/logo2.png' alt='logo' width={140} height={30} />
        <div className="flex space-x-4">
            <Image className="cursor-pointer" src='/images/twitter.png' width={30} height={30} alt='twitter' />
            <Image className="cursor-pointer" src='/images/discord.png' width={30} height={30} alt='discord' />
            <Image className="cursor-pointer" src='/images/tele.png' width={30} height={30} alt='telegram' />
        </div>
    </footer>
  );
}
