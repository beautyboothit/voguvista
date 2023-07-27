import React from "react";

type Props = {};

export default function UserCart({}: Props) {
  return (
    <div className="flex items-center ml-8 gap-8">
      <span>
        <img src="/svg/user.svg" alt="" />
      </span>
      <span>
        <img src="/svg/cart.svg" alt="" />
      </span>
    </div>
  );
}
