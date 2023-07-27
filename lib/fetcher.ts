export const  fetchHomeData=async()=>{
    const [
        sliderRes,
        topCategoriesRes
    ]=await Promise.all([
        fetch(process.env.API_ENDPOINT+"sliders"),
        fetch(process.env.API_ENDPOINT+"categories/trending?slice=false")
        
    ]);
    const [
        sliders,
        topCategories
    ]=await Promise.all([
        sliderRes.json(),
        topCategoriesRes.json()

    ]);
    return  {
        sliders:sliders.data,
        topCategories:topCategories.data
    }
}



