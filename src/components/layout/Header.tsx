import Link from 'next/link'
import { mainMenuLinks } from '@/lib/links'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import Image from 'next/image'

export default function Header() {
  return (
    <nav>
        <div className="container flex items-center justify-between py-4">
            {/* logo */}
            <Image src="/svg/logo.svg" width={220} height={90} alt="logo" />
            <div className="flex items-center">
                {
                    mainMenuLinks.map((link, index) => (
                        <Link href={link.path} key={index} className='text-lg py-2 px-3'>{link.name}</Link>
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
