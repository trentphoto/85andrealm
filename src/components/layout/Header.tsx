import Link from 'next/link'
import { mainMenuLinks } from '@/lib/links'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className='w-full'>
        <div className="container flex items-center justify-between py-4">
            {/* logo */}
            <Link href="/">
                <Image src="/svg/logo.svg" width={220} height={90} alt="logo" />
            </Link>
            <div className="flex items-center gap-1">
                {
                    mainMenuLinks.map((link, index) => (
                        <Link href={link.path} key={index} className="underlineEffect">{link.name}</Link>
                    ))
                }
            </div>
            <div className="flex items-center gap-3">
                <FaSearch className='text-xl text-gray-600' />
                <FaUser className='text-xl text-gray-600' />
                <FaShoppingCart className='text-xl text-gray-600' />
            </div>
        </div>
    </nav>
  )
}
