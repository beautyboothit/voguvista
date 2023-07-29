import { get } from "./kv";

export const fetchHomeData = async () => {

  const homeData=await get("home_data");
  if(homeData){
    return homeData;
  }
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
  return {
    sliders: sliders.data,
    topCategories: topCategories.data,
    bestProducts: bestSaleProducts.data,
  };
};

export const fetchProduct = async (slug: string) => {
  const productData=await get('product_'+slug);
  if(productData){
    return productData;
  }
  const res = await fetch(process.env.API_ENDPOINT + "products/" + slug);
  const product = await res.json();
  return { product: product.data[0] };
};
