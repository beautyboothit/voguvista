export const runtime = "edge";
export const revalidate = 1800;
import { KVNamespace } from "@cloudflare/workers-types";
import { fetchHomeData } from "@/lib/fetcher";
import Banner from "../components/home/Banner";
import BestSale from "../components/home/BestSale";
import ScrollBanner from "../components/home/ScrollBanner";
import TopBanner from "../components/home/TopBanner";
import TopCategories from "../components/home/TopCategories";
import TopProducts from "../components/home/TopProducts";
import TrendingProducts from "../components/home/TrendingProducts";

export default async function Home() {
  let res:any="empty";
  const { test } = (process.env as unknown as { test:KVNamespace });
  // if(test){
    res = await test.get("home_posts");
    //.test.get("home_posts")
  // }
  
  const { sliders, topCategories, bestProducts } = await fetchHomeData();
  return (
    <div>
      {JSON.stringify(res)}
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
