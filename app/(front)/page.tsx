export const runtime = "edge";
import { fetchHomeData } from "@/lib/fetcher";
import Banner from "../components/home/Banner";
import BestSale from "../components/home/BestSale";
import ScrollBanner from "../components/home/ScrollBanner";
import TopBanner from "../components/home/TopBanner";
import TopCategories from "../components/home/TopCategories";
import TopProducts from "../components/home/TopProducts";
import TrendingProducts from "../components/home/TrendingProducts";

export default async function Home() {
  const { sliders, topCategories, bestProducts } = await fetchHomeData();
  return (
    <div>
      <Banner sliders={sliders} />

      <div className="container mx-auto">
        <TopCategories topCategories={topCategories} />
        <TopProducts bestProducts={bestProducts} />
        <TopBanner />
        <TrendingProducts />
        <BestSale />
        <ScrollBanner />
      </div>
    </div>
  );
}
