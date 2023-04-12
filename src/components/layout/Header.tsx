import Link from 'next/link'
import { mainMenuLinks } from '@/lib/links'
import { FaBars, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import Image from 'next/image'
import Cart from '../Cart'
import { useSelector } from 'react-redux'
import store, { IState, toggle } from '@/lib/redux'

export default function Header() {
    const cartIsOpen = useSelector((state: IState) => state.ui)
    return (
        <>
            <nav className='w-full'>
                <div className="container flex items-center justify-between px-4 py-4">
                    {/* logo */}
                    <Link href="/">
                        <Image src="/svg/logo.svg" width={220} height={90} alt="logo" />
                    </Link>
                    <div className="items-center gap-1 hidden md:flex">
                        {
                            mainMenuLinks.map((link, index) => (
                                <Link href={link.path} key={index} className="smallcaps text-[12px] lg:text-sm underlineEffect">{link.name}</Link>
                            ))
                        }
                    </div>
                    <div className="flex items-center gap-0.5">
                        <FaBars className='text-xl text-gray-600 p-4 border border-transparent hover:border-gray-200 cursor-pointer shrink-0 w-12 h-12 block md:hidden' />
                        <Link href="/profile">
                            <FaUser className='text-xl text-gray-600 p-4 border border-transparent hover:border-gray-200 cursor-pointer shrink-0 w-12 h-12' />
                        </Link>
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
