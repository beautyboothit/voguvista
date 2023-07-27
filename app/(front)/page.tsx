import Banner from "../components/home/Banner";
import BestSale from "../components/home/BestSale";
import ScrollBanner from "../components/home/ScrollBanner";
import TopBanner from "../components/home/TopBanner";
import TopCategories from "../components/home/TopCategories";
import TopProducts from "../components/home/TopProducts";
import TrendingProducts from "../components/home/TrendingProducts";

export default function Home() {
  return (
    <div>
      <Banner />

      <div className="container mx-auto">
        <TopCategories />
        <TopProducts />
        <TopBanner />
        <TrendingProducts />
        <BestSale />
        <ScrollBanner />
      </div>
    </div>
  );
}
