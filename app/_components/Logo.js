import Image from "next/image"
import Link from "next/link";
import logo from "@/public/logo.png"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4">
      <Image
        src={logo}
        alt="logo"
        quality={100}
        height="48"
        width="48"
      />
      <h1 className="text-xl">The Wild Oasis</h1>
    </Link>
  )
}
