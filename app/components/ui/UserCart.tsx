import React from "react";

type Props = {};

export default function UserCart({}: Props) {
  return (
    <div className="flex items-center ml-8 gap-8">
      <span>
        <img src="./assets/svg/user.svg" alt="" />
      </span>
      <span>
        <img src="./assets/svg/cart.svg" alt="" />
      </span>
    </div>
  );
}
