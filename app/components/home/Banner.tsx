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
        // <Image
        //   // className="object-fill"
        //   key={index}
        //   src={`${process.env.ASSET_ENDPOINT}${image.photo}`}
        //   alt="banner"
        // />
        <img
          key={index}
          src={`${process.env.ASSET_ENDPOINT}${image.photo}`}
          alt="logo"
          loading="lazy"
        />
      ))}
    </div>
  );
}
