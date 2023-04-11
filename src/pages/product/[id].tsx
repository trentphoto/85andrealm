import AddToCartButton from "@/components/AddToCartButton";
import ButtonLink from "@/components/ButtonLink";
import ItemCard from "@/components/ItemCard";
import QuantitySelector from "@/components/QuantitySelector";
import Layout from "@/components/layout/Layout";
import { fetchProduct, fetchProducts } from "@/lib/fetchFunctions";
import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCaretLeft, FaFlagUsa, FaGlobe, FaGlobeAmericas, FaHeart, FaShippingFast } from "react-icons/fa";

export default function BlogSingle({ product, products }: { product: Product, products: Product[] }) {

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  }

  // check if product has a quantity assigned. if not, set it to 1
  useEffect(() => {
    setQuantity(1);
  }, [product])
    

  return (
    <Layout>
      <section className="p-4 py-20">
        
        {/* back button */}
        <div className="container">
          <Link href='/shop' className="inline-flex items-center gap-2 px-6 py-3 mb-12 rounded-full cursor-pointer hover:bg-gray-50">
              <FaCaretLeft className="text-2xl text-gray-400 hover:text-gray-500" />
              <span className="smallcaps text-sm text-gray-500">Back to Products</span>
            </Link>
        </div>
        
        <div className="container block md:grid grid-cols-12 gap-16">
          <div className="col-span-12 md:col-span-5">
            <Image 
              src={product.image_url}
              alt={product.name}
              width={500}
              height={500}
            />
          </div>
          <div className="col-span-12 md:col-span-7 flex flex-col gap-3 items-start">
            <h1 className="">{product.name}</h1>

            {/* price and stock info */}
            <div className="flex items-center gap-4">
              <p className="text-green-700 font-bold tracking-wider">${product.price}</p>
              {/* divider */}
              <div className="block h-full w-px bg-gray-400" />
              <p className="text-gray-400 uppercase text-sm tracking-wider">{product.stock > 10 ? "In Stock" : product.stock > 1 ? `Only ${product.stock} left!` : "Out of Stock"}</p>
            </div>

            <p className="mb-20">{product.description}</p>

            <div className="flex flex-col lg:flex-row gap-2">
            
              {
                product.stock ? (
                  <>
                    <QuantitySelector quantity={quantity} updateQuantity={handleQuantityChange} item={product} />
                    <AddToCartButton product={product} quantity={quantity} />
                  </>
                ) : <ButtonLink href="/shop">Back to Shop</ButtonLink>
              }

            </div>

            {/* add to favorites button */}
            <div className="flex items-center gap-2 px-6 py-3 mb-0 rounded-full cursor-pointer hover:bg-gray-50">
              <FaHeart className="text-2xl text-pink-200 hover:text-pink-500" />
              <span>Add to Favorites</span>
            </div>

            <div className="flex flex-col items-stretch w-full">
              <div className="flex items-center gap-2">
                <FaShippingFast className="text-xl text-gray-400 my-4 mr-2 ml-1" />
                <span className="text-gray-400 text-sm italic">Fast, free shipping</span>
              </div>
              {/* divider */}
              <div className="block w-full h-px bg-gray-400" />

              <div className="flex items-center gap-2">
                <FaFlagUsa className="text-xl text-gray-400 my-4 mr-2 ml-1" />
                <span className="text-gray-400 text-sm italic">Made in USA</span>
              </div>
              
              {/* divider */}
              <div className="block w-full h-px bg-gray-400" />

              <div className="flex items-center gap-2">
                <FaGlobeAmericas className="text-xl text-gray-400 my-4 mr-2 ml-1" />
                <span className="text-gray-400 text-sm italic">Reliably Sourced</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* related products */}
      <section className="p-4 py-24 bg-gray-50">
          <div className="container">
              <h2 className='text-center mb-12'>More in This Category</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {
                  products ? products.filter(item => item.category_id === product.category_id && item.id !== product.id).splice(0,4).map((item) => (
                      <ItemCard key={item.id} product={item} />
                  )) : ''
              }
              </div>
          </div>
      </section>
    </Layout>
  )
}
export async function getServerSideProps(context: any) {
  const baseUrl = context.req ? `http://${context.req.headers.host}` : '';
  const id = context.query.id;
  const product = await fetchProduct(baseUrl, id); 
  const products = await fetchProducts(baseUrl); 
  return { props: { product, products } };
}
