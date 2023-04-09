import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout/Layout'
import ButtonLink from '@/components/ButtonLink'
import Link from 'next/link'
import Stars from '@/components/Stars'
import { FaCalendarAlt, FaPenSquare } from 'react-icons/fa'
import { fetchProducts } from '@/lib/fetchProducts'
import { Product } from '@/types/types'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ products }: { products: Product[] }) {

  const HomeHero = () => (
    <>
        <section className="relative w-full h-[calc(100vh-122px)] overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
              <Image src="https://res.cloudinary.com/dakfmjumy/image/upload/v1680994843/realm/site/home-hero-small_1_eqaswy.jpg" alt="hero" width={1800} height={1200} />
            </div>
            <div className="relative container">
                <div className="h-screen grid md:grid-cols-2">
                  <div></div>
                  <div className="flex flex-col items-start justify-start mt-40">
                    <h1 className="h0">New Collections</h1>
                    <div className="smallcaps text-xl mt-4">A Perfect Bouquet</div>
                    <ButtonLink href="/shop" className="mt-6">Shop Now</ButtonLink>
                  </div>
                </div>
            </div>
        </section>
    </>
  )

  const ItemCard: React.FC = () => (
    <div className="relative overflow-hidden flex flex-col items-stretch">
      <Image src="https://res.cloudinary.com/dakfmjumy/image/upload/v1681004007/realm/products/roses/bouquet-of-roses-2021-08-26-16-31-28-utc_copy_1_rfkyhu.jpg" alt="rose" width={1000} height={1000} className='' />
      <div className="p-4 flex flex-col items-center justify-start text-center gap-2">
        <h3 className="h4">Roses</h3>
        <Stars rating={5} />
        <div className="font-bold">$302.20</div>
      </div>
    </div>
  )

  const BlogCard: React.FC = () => (
    <div className="relative overflow-hidden flex flex-col items-stretch">
      <Image src="https://res.cloudinary.com/dakfmjumy/image/upload/v1680924490/realm/products/roses/close-up-of-a-beautiful-bouquet-of-white-and-yello-2021-09-01-09-43-36-utc_1_vb4mfl.jpg" alt="basket" width={1000} height={1000} className='' />
      <div className="p-4 flex flex-col items-start justify-start gap-2">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-gray-400" />
            <span>July 22nd</span>
          </div>
          
          {/* divider */}
          <div className="block h-full w-px bg-gray-400" />

          <div className="flex items-center gap-2">
            <FaPenSquare className="text-gray-400" />
            <span>By John Doe</span>
          </div>
        </div>
        <h3 className="h4">Blog post title goes here.</h3>
        <div className="">Description here</div>
      </div>
    </div>
  )

  return (
    <Layout>
      <pre>{JSON.stringify(products)}</pre>
      <HomeHero />
      <section className="p-4 py-24">
        <div className="container grid grid-cols-3 gap-4 mb-4">

          {/* card 1 */}
          <div className="col-span-3 md:col-span-2 relative overflow-hidden">
            <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 flex items-center justify-center">
              <Image src="https://res.cloudinary.com/dakfmjumy/image/upload/v1680999775/realm/site/lavender_tu2ur8.jpg" alt="lavender" width={1800} height={600} className='w-full h-full object-cover' />
            </div>
            <div className="relative p-8 py-20 grid grid-cols-2">
              <div></div>
              <div className='ml-8'>
                <h2 className='h3'>Lavender Collections</h2>
                <p className="smallcaps">Up to 20% off</p>
                <ButtonLink href="/shop" className="mt-6">Browse Now</ButtonLink>
              </div>
            </div>
          </div>

          {/* card 2: square card, image background, no text */}
          <div className="relative overflow-hidden hidden md:block">
            <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 flex items-center justify-center">
              <Image src="https://res.cloudinary.com/dakfmjumy/image/upload/v1681001215/realm/site/flowers1_mmvbxm.jpg" alt="flowers background" width={1800} height={1800} className='w-full h-full object-cover' />
            </div>
          </div>
        </div>

        {/* row 2 */}

        <div className="container grid grid-cols-3 gap-4 mb-4">

          {/* card 1: square card */}
          <div className="relative overflow-hidden hidden md:block">
            <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 flex items-center justify-center">
              <Image src="https://res.cloudinary.com/dakfmjumy/image/upload/v1681002736/realm/site/tulip1_dtbk0c.jpg" alt="flowers background" width={1800} height={1800} className='w-full h-full object-cover' />
            </div>
            <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 bg-white/75" />
            <div className="relative p-8 h-full flex flex-col items-center justify-center gap-3">
              <h2 className=''>Tulips</h2>
              <p className="italic">Browse Now</p>
            </div>

          </div>

          {/* card 2 */}
          <div className="col-span-3 md:col-span-2 relative overflow-hidden">
            <div className="absolute w-full h-full top-0 right-0 bottom-0 left-0 flex items-center justify-center">
              <Image src="https://res.cloudinary.com/dakfmjumy/image/upload/v1681002636/realm/site/peony_phigwm.jpg" alt="lavender" width={1800} height={600} className='w-full h-full object-cover' />
            </div>
            <div className="relative p-8 py-20 grid grid-cols-2">
              <div></div>
              <div className=''>
                <p className="smallcaps">Up to 10% off</p>
                <h2 className='h3'>Happy Mother's Day</h2>
                <ButtonLink href="/shop" className="mt-6">Explore Collection</ButtonLink>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="p-4 py-24">
        <div className="container">
          <h2 className='text-center mb-8'>Browse by Category</h2>
          <div className="flex items-center justify-center gap-2 mb-12">
            <Link href="/shop">New Arrivals</Link>
            <Link href="/shop">Wedding</Link>
            <Link href="/shop">Holiday</Link>
            <Link href="/shop">Spring</Link>
            <Link href="/shop">Roses</Link>
            <Link href="/shop">Plants</Link>
          </div>
          <div className="grid grid-cols-4 gap-3">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </section>

      <section className="p-4 py-24 relative">
        <div className="absolute w-full h-1/2 top-0 right-0 left-0 bg-blue-100" />
        <div className="container relative">
          <h2 className='text-center mb-8'>Newest Arrivals</h2>
          <div className="grid grid-cols-4 gap-3">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </section>

      <section className="p-4 py-24 relative">
        <div className="container">
          <h2 className='text-center mb-8'>From the Blog</h2>
          <div className="grid grid-cols-3 gap-3">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>

      <section className="p-4 py-24 relative">
        <div className="container">
          <h2 className='text-center mb-8'>What People Are Saying</h2>
          
          {/* testimonial */}
          <div className="mx-auto flex flex-col items-center gap-2 text-center max-w-xl">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,</p>
            <div className="w-24 h-24">
              <Image src="https://res.cloudinary.com/dakfmjumy/image/upload/v1680994843/realm/site/home-hero-small_1_eqaswy.jpg" alt="testimonial" width={100} height={100} className='w-full h-full object-cover rounded-full' />
            </div>
            <p><span className='font-bold'>Lauren</span>, customer</p>
          </div>

        </div>
      </section>
      
    </Layout>
  )
}

export const getServerSideProps = async (context: any) => {
  const baseUrl = context.req ? `http://${context.req.headers.host}` : '';
  const products = await fetchProducts(baseUrl);
  return {
      props: {
          products,
      },
  };
}