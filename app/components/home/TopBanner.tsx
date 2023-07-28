import Image from "next/image";
import React from "react";

type Props = {};

export default function TopBanner({ }: Props) {
  return (
    <div className="mt-20 mb-[100px]">
      <div className="grid grid-cols-12 gap-[30px]">
        <div className="col-span-6">
          <Image layout="responsive"
            width={250}
            height={250} loading="lazy" src="/banner/1.png" alt="" className="w-full" />
        </div>
        <div className="col-span-6">
          <Image layout="responsive"
            width={250}
            height={250} loading="lazy" src="/banner/2.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
}
