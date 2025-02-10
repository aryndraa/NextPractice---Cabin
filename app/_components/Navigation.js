import Link from 'next/link'
import { auth } from "@/app/_lib/auth"

export default async function Navigation() {
  const session = await auth();
  console.log(session)
  return (
    <ul className="flex gap-12">
      <li>
        <Link
          href="/" 
          className='hover:text-accent-400 transition-colors'
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/cabins" 
          className='hover:text-accent-400 transition-colors'
        >
          Cabins
        </Link>
      </li>
      <li>
        <Link
          href="/about" 
          className='hover:text-accent-400 transition-colors'
        >
          About
        </Link>
      </li>
      <li>
       {session?.user?.image? 
        <Link
          href="/account" 
          className='hover:text-accent-400 transition-colors flex items-center gap-4'
        >
          <img
            className="h-8 rounded-full" 
            src={session.user.image}
            alt={session.user.name}
            referrerPolicy='no-referrer'
          />
          <span>
           {session.user.name}
          </span>
        </Link>
       :
        <Link
          href="/account" 
          className='hover:text-accent-400 transition-colors'
        >
          Guest Area
        </Link>}
      </li>
    </ul>
  )
}