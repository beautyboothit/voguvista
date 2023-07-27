import React from "react";
import ProductCard from "./ProductCard";

type Props = {
  title: string;
  url: string;
  productList: [];
};

export default function RecommendedProduct({ title, url, productList }: Props) {
  return (
    <div className="pt-[100px] pb-10">
      <div className="flex justify-between items-center">
        <h3 className="f-24 text-black font-medium">{title}</h3>
        <a href="#">
          <svg
            width="52"
            height="17"
            viewBox="0 0 52 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 633">
              <path
                id="Vector 9"
                d="M41.999 1L49.999 8.16667L41.999 15.3333"
                stroke="black"
                stroke-width="2"
              />
              <path
                id="Vector 10"
                d="M9.99976 15.3335L1.99976 8.16683L9.99976 1.00016"
                stroke="black"
                stroke-width="2"
              />
            </g>
          </svg>
        </a>
      </div>
      <div className="grid grid-cols-12 grid-flow-col gap-[30px] mt-5 overflow-scroll scrollbar-hide">
        {productList.slice(0, 4).map((product, index) => (
          <div className="col-span-10 md:col-span-3" key={index}>
            <ProductCard product={product} />
          </div>
        ))}

        {/* <div className="col-span-10 md:col-span-3">
          <ProductCard />
        </div>
        <div className="col-span-10 md:col-span-3">
          <ProductCard />
        </div>
        <div className="col-span-10 md:col-span-3">
          <ProductCard />
        </div> */}
      </div>
    </div>
  );
}
