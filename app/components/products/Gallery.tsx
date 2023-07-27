type Props = {
  thumbnail_image: string;
};

export default function Gallery({ thumbnail_image }: Props) {
  return (
    <div className="col-span-12 md:col-span-8">
      {/* <div className="flex gap-2 overflow-scroll scrollbar-hide">
        <div className="flex sm:flex-col gap-2">
          <img src={`${process.env.ASSET_ENDPOINT}${thumbnail_image}`} alt="" />
          <img src="/product/gallery/2.png" alt="" />
        </div>
        <div className="flex sm:flex-col gap-2">
          <img src="/product/gallery/3.png" alt="" />
          <img src="/product/gallery/4.png" alt="" />
        </div>
      </div> */}

      <div className="grid grid-cols-2 gap-2 overflow-scroll scrollbar-hide">
        <div className="col-span-1 gap-2">
          <img
            src={`${process.env.ASSET_ENDPOINT}${thumbnail_image}`}
            alt=""
            className="mb-2 rounded-lg"
            loading="lazy"
          />
          <img src="/product/gallery/2.png" alt="" loading="lazy" />
        </div>
        <div className="col-span-1 gap-2">
          <img
            src="/product/gallery/3.png"
            alt=""
            className="mb-2 rounded-lg"
            loading="lazy"
          />
          <img src="/product/gallery/4.png" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
}
