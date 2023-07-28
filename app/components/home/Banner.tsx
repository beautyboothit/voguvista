import Image from "next/image";

type Image = {
  photo: string;
  url: string;
};
type Slider = {
  desktop: Image[];
  mobile: Image[];
};
type Props = {
  sliders: Slider;
};

export default function Banner({ sliders }: Props) {
  return (
    <div className="">
      {sliders.desktop.map((image, index) => (
        <Image
          // className="object-fill"
          key={index}
          layout="responsive"
          width={1200}
          height={500}
          src={`${process.env.ASSET_ENDPOINT}${image.photo}`}
          alt="banner"
          loading="lazy"
        />
        // <img
        //   key={index}
        //   src={`${process.env.ASSET_ENDPOINT}${image.photo}`}
        //   alt="logo"
        //   loading="lazy"
        // />
      ))}
    </div>
  );
}
