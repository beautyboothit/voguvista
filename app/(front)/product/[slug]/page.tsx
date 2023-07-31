export const runtime = "edge";
import BrandRating from "@/app/components/products/BrandRating";
import Color from "@/app/components/products/Color";
import Description from "@/app/components/products/Description";
import Gallery from "@/app/components/products/Gallery";
import NamePrice from "@/app/components/products/NamePrice";
import ProductCard from "@/app/components/products/ProductCard";
import PromotionalOffer from "@/app/components/products/PromotionalOffer";
import Quantity from "@/app/components/products/Quantity";
import RecommendedProduct from "@/app/components/products/RecommendedProduct";
import Size from "@/app/components/products/Size";
import { fetchProduct } from "@/lib/fetcher";
import { ProductProps } from "@/lib/types";

type Props = {
  params: {
    slug: string;
  };
};
export default async function ProductPage({ params }: Props) {
  const { product }: any = await fetchProduct(params.slug);

  return (
    <div className="container mx-auto">
      {/* <!-- product details  --> */}
      <div className="grid grid-cols-12 grid-flow-col pt-10 gap-[40px]">
        <Gallery thumbnail_image={product.thumbnail_image} />
        <div className="col-span-12 md:col-span-4">
          <BrandRating
            brand={product.brand}
            rating={product.rating}
            rating_count={product.rating_count}
          />

          <NamePrice
            name={product.name}
            main_price={product.main_price}
            stroked_price={product.stroked_price}
            has_discount={product.has_discount}
          />

          {/* <!-- color  --> */}
          <Color />

          {/* <!-- size  --> */}
          <Size />

          {/* <!-- Quantity  --> */}
          <Quantity productId={product.id} />

          {/* <!-- promotional offer  --> */}
          <PromotionalOffer />

          {/* <!-- description  --> */}
          <Description />
        </div>
      </div>

      {/* <!-- also like  --> */}
      {/* <div className="pt-[100px]">
        <div className="flex justify-between items-center">
          <h3 className="f-24 text-black font-medium">You may also like</h3>
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
          <div className="col-span-10 md:col-span-3">
            <ProductCard />
          </div>
          <div className="col-span-10 md:col-span-3">
            <ProductCard />
          </div>
          <div className="col-span-10 md:col-span-3">
            <ProductCard />
          </div>
          <div className="col-span-10 md:col-span-3">
            <ProductCard />
          </div>
        </div>
      </div> */}

      {/* <!-- Customer also viewed   --> */}
      {/* <div className="pt-[100px] pb-10">
        <div className="flex justify-between items-center">
          <h3 className="f-24 text-black font-medium">Customer also viewed</h3>
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
          <div className="col-span-10 md:col-span-3">
            <ProductCard />
          </div>
          <div className="col-span-10 md:col-span-3">
            <ProductCard />
          </div>
          <div className="col-span-10 md:col-span-3">
            <ProductCard />
          </div>
          <div className="col-span-10 md:col-span-3">
            <ProductCard />
          </div>
        </div>
      </div> */}
      <RecommendedProduct
        title="Customer also viewed"
        url="/"
        productList={product.more_from_brand}
      />
    </div>
  );
}
