import { set } from "@/lib/kv";
import { NextResponse } from "next/server";
export async function GET() {
  const [sliderRes, topCategoriesRes, bestSaleProductsRes] = await Promise.all([
    fetch(process.env.API_ENDPOINT + "sliders"),
    fetch(process.env.API_ENDPOINT + "categories/trending?slice=false"),
    fetch(process.env.API_ENDPOINT + "products/section/best_selling_home"),
  ]);
  const [sliders, topCategories, bestSaleProducts] = await Promise.all([
    sliderRes.json(),
    topCategoriesRes.json(),
    bestSaleProductsRes.json(),
  ]);
 const res= await set("home_data", {
    sliders: sliders.data,
    topCategories: topCategories.data,
    bestProducts: bestSaleProducts.data,
  });
  return NextResponse.json({ success: res });
}
