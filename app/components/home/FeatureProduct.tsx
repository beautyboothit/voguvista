import { ProductProps } from "@/lib/types";
import Link from "next/link";

type Product = ProductProps;

type Props = {
  product: Product;
};

export default function FeatureProduct({ product }: Props) {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="px-5 py-10 bg-baseColor rounded-xl product_item relative group">
        <img
          src={`${process.env.ASSET_ENDPOINT}${product.thumbnail_image}`}
          alt=""
          className="mix-blend-darken mx-auto"
        />
        <h3>{product.name}</h3>
        <h4>${product.main_price}</h4>
        <div className="absolute top-3 right-3 w-9 h-9 bg-PaleGray rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 9L7 16H9V9H16V7H9V0H7L7 7H0V9H7Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}
