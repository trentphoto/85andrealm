import { Product } from "@/types/types";
import clsx from "clsx";
import Link from "next/link";
import { IconType } from "react-icons";
import { FaCartPlus, FaShoppingCart } from "react-icons/fa";

export default function AddToCartButton({ product }: { product: Product } ) {
  return (
    <>
        <div 
            className={clsx(
                "cursor-pointer inline-flex items-center justify-center px-12 py-3",
                "text-lg font-bold tracking-wider",
                "bg-green-600 text-white hover:bg-green-700 active:bg-green-600"
            )}
        >
            <FaCartPlus className="text-xl mr-2" />

            <span>Add to Cart</span>
            
        </div>
    </>
  )
}
