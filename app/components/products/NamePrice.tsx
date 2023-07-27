import React from "react";

type Props = {
  name: string;
  has_discount?: boolean;
  stroked_price: number;
  main_price: number;
};

export default function NamePrice({
  name,
  main_price,
  stroked_price,
  has_discount,
}: Props) {
  return (
    <div>
      <h1 className="mt-[13px] font-medium text-lightBlack">{name}</h1>

      <div className="flex items-center mt-9">
        <span className="font-bold f-20 text-blackColor">৳ {main_price}</span>
        {has_discount && (
          <span>
            <span className="text-muteColor ml-5">৳ {stroked_price}</span>
            <span className="text-[#8E00E5] ml-3">
              Save ৳ {stroked_price - main_price} (-
              {Math.round(((stroked_price - main_price) / stroked_price) * 100)}
              %)
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
