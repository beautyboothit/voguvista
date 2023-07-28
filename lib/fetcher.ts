export const fetchHomeData = async () => {
  const [sliderRes, topCategoriesRes, bestSaleProductsRes] = await Promise.all([
    fetch(process.env.API_ENDPOINT + "sliders"),
    fetch(process.env.API_ENDPOINT + "categories/trending?slice=false"),
    fetch(process.env.API_ENDPOINT + "products/section/best_selling_home", {
      // @ts-ignore
      cf: {
        cacheTtl: 1800,
        cacheEverything: true,
      },
    }),
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
  const res = await fetch(process.env.API_ENDPOINT + "products/" + slug);
  console.log(process.env.API_ENDPOINT + "products/" + slug);

  const product = await res.json();
  return { product: product.data[0] };
};
