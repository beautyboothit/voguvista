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
  //@ts-ignore
  const { vv } = (process.env as { vv });
  await vv.put('home_data', {
    sliders: sliders.data,
    topCategories: topCategories.data,
    bestProducts: bestSaleProducts.data,
  });
  
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
