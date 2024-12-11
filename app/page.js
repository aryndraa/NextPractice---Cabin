import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Home() {
  return (
    <main className="mt-12">
      <Image
        src={bg}
        alt=""
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
      />
      <div className="relative z-10 text-center">
        <h1 className=" text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome To Home Page
        </h1>
        <Link
          href="/"
        >
          Explore Luxury Cabins
        </Link>
      </div>
    </main>
  );
}
