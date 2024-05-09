import Image from "next/image";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "@/components/carousel";

export default function Home() {
  const OPTIONS: EmblaOptionsType = { slidesToScroll: "auto" };
  const SLIDE_COUNT = 10;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <main className="flex min-h-screen max-w-6xl flex-col p-4 mx-auto space-y-12">
      <div className="!mt-12">
        <h1 className="text-left text-4xl font-bold">Featured Launches</h1>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <Image src='/images/build_support.svg' alt='build' width={10000} height={2000} />
      <Image src='/images/vision.svg' alt='build' width={10000} height={2000} />
      <Image src='/images/better_bitcoin.png' alt='build' width={10000} height={2000} />
    </main>
  );
}
