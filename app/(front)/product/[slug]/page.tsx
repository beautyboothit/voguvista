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
    <div>
      {JSON.stringify(product)}
    </div>
  );
}
