import { ProductProps } from "@/lib/types";
import Link from "next/link";
import React from "react";

type Product = ProductProps;

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  console.log(product);
  return (
    <Link
      href={`/product/${product?.slug}`}
      className="block bg-bgColor rounded-lg-xl"
    >
      <img
        src={`${process.env.ASSET_ENDPOINT}${product?.thumbnail_image}`}
        alt=""
        loading="lazy"
      />
      <div className="px-6 py-5">
        <h3 className="text-[#202020] line-clamp-1">{product?.name}</h3>
        <h4 className="mt-4 text-black font-semibold f-20">
          ৳ {product?.main_price}
        </h4>
      </div>
    </Link>
  );
}
