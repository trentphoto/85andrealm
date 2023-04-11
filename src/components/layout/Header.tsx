import Link from 'next/link'
import { mainMenuLinks } from '@/lib/links'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import Image from 'next/image'
import Cart from '../Cart'
import { useSelector } from 'react-redux'
import store, { ICartState, toggle } from '@/lib/redux'

export default function Header() {
    const cartIsOpen = useSelector((state: ICartState) => state.ui)
    return (
        <>
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
                    <div className="flex items-center gap-0.5">
                        <FaSearch className='text-xl text-gray-600 p-4 border border-transparent hover:border-gray-200 cursor-pointer shrink-0 w-12 h-12' />
                        <FaUser className='text-xl text-gray-600 p-4 border border-transparent hover:border-gray-200 cursor-pointer shrink-0 w-12 h-12' />
                        <FaShoppingCart className='text-xl text-gray-600 p-4 border border-transparent hover:border-gray-200 cursor-pointer shrink-0 w-12 h-12' onClick={() => store.dispatch(toggle())} />
                    </div>
                </div>
            </nav>
            {
                cartIsOpen ? <Cart /> : ''
            }
        </>
  )
}
