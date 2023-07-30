import { ProductProps } from "@/lib/types";
import FeatureProduct from "./FeatureProduct";
import Link from "next/link";
import Image from "next/image";

type Product = ProductProps;
type Props = {
  bestProducts: Product[];
};

export default function TopProducts({ bestProducts }: Props) {
  return (
    <div className="section_intro">
      <h2>Featured Products</h2>
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-3">
          <div className="flex flex-col gap-9">
            <FeatureProduct product={bestProducts[2]} />
            <FeatureProduct product={bestProducts[1]} />
            {/* <a href="#">
              <div className="px-5 py-10 bg-baseColor rounded-xl product_item relative group">
                <img
                  src="/product/product2.png"
                  alt=""
                  className="mix-blend-darken mx-auto"
                />
                <h3>Full Product name will be here in max two lines</h3>
                <h4>$678</h4>

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
            </a> */}
          </div>
        </div>

        <div className="col-span-6">
          <div className="flex flex-col gap-9">
            <Link
              href={`/product/${bestProducts[0].slug}`}
              className="px-10 pt-[113px] pb-10 bg-baseColor rounded-xl"
            >
              <div className="product_item">
                {/* <img
                  src={`${process.env.ASSET_ENDPOINT}${bestProducts[0].thumbnail_image}`}
                  alt=""
                  className="mix-blend-darken mx-auto"
                  loading="lazy"
                /> */}
                <Image
                  // className="object-fill"
                  layout="responsive"
                  width={350}
                  height={800}
                  src={`${process.env.ASSET_ENDPOINT}static/600/1100/${bestProducts[0].thumbnail_image}`}
                  alt="banner"
                  loading="lazy"
                />
                <h3>{bestProducts[0].name}</h3>
                <h4>${bestProducts[0].main_price}</h4>
              </div>
            </Link>
          </div>
        </div>

        <div className="col-span-3">
          <div className="flex flex-col gap-9">
            <FeatureProduct product={bestProducts[3]} />
            <FeatureProduct product={bestProducts[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}
