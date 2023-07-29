import { KVNamespace } from "@cloudflare/workers-types";

export const fetchHomeData = async () => {

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
  const { kv } = (process.env as unknown as { kv:KVNamespace });
     await kv.put("home_data",JSON.stringify({
      sliders: sliders.data,
      topCategories: topCategories.data,
      bestProducts: bestSaleProducts.data,
    }));
  // const homeData=await test.get('home_data');
  // return JSON.parse(homeData!);
  return {
    sliders: sliders.data,
    topCategories: topCategories.data,
    bestProducts: bestSaleProducts.data,
  };
};

export const fetchProduct = async (slug: string) => {
  const res = await fetch(process.env.API_ENDPOINT + "products/" + slug);
  console.log(process.env.API_ENDPOINT + "products/" + slug);

  const product = await res.json();
  return { product: product.data[0] };
};
