"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
type Props = {
  userId:string|undefined
};

export default function Quantity({userId}: Props) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((q) => q + 1);
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity((q) => q - 1);
    }
  };

  const addToCart = async () => {
    //TODO: create add to cart
    let id=localStorage.getItem("userId")
     if(!id){
     id = uuidv4();
     localStorage.setItem("userId",id)
     }
     console.log(id)
  };

  return (
    <div className="mt-9">
      <div className="flex justify-between items-center">
        <span className="text-blackColor font-medium">Quantity: </span>

        <div className="flex items-center">
          <span>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 0.5C3.58885 0.5 0 4.08885 0 8.5C0 12.9112 3.58885 16.5 8 16.5C12.4112 16.5 16 12.9112 16 8.5C16 4.08885 12.4112 0.5 8 0.5ZM12.1635 5.81885L6.99423 11.9727C6.93753 12.0402 6.86697 12.0948 6.78734 12.1327C6.70771 12.1706 6.62087 12.1909 6.53269 12.1923H6.52231C6.43605 12.1923 6.35077 12.1741 6.27199 12.139C6.1932 12.1039 6.12268 12.0526 6.065 11.9885L3.84962 9.52692C3.79335 9.46725 3.74959 9.39693 3.72089 9.3201C3.69219 9.24327 3.67914 9.16148 3.6825 9.07953C3.68587 8.99758 3.70558 8.91714 3.74047 8.84292C3.77537 8.7687 3.82476 8.7022 3.88572 8.64734C3.94668 8.59247 4.018 8.55035 4.09548 8.52345C4.17295 8.49654 4.25502 8.48539 4.33687 8.49065C4.41872 8.49592 4.49869 8.51749 4.57208 8.5541C4.64547 8.59071 4.7108 8.64162 4.76423 8.70385L6.50615 10.6392L11.2212 5.02731C11.3269 4.90503 11.4766 4.82928 11.6377 4.81644C11.7989 4.8036 11.9586 4.85469 12.0824 4.95868C12.2062 5.06266 12.2841 5.21119 12.2993 5.37215C12.3144 5.5331 12.2656 5.69356 12.1635 5.81885Z"
                fill="#009E6E"
              />
            </svg>
          </span>
          <a href="#" className="text-[12px] text-[#009E6E] ml-2">
            Available in stock
          </a>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <div className="flex gap-3">
          <div className="flex border border-[#DCDCDC] h-10 leading-10 rounded line">
            <span className="flex justify-center w-20"> {quantity}</span>
            <button
              disabled={quantity == 1}
              onClick={decrease}
              className="flex justify-center items-center w-10 bg-[#F4F4F4] border-l border-[#DCDCDC] disabled:cursor-not-allowed"
            >
              <svg
                width="8"
                height="2"
                viewBox="0 0 8 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 0V2H0V0H8Z" fill="#3B3B3B" />
              </svg>
            </button>
            <button
              onClick={increase}
              className="flex justify-center items-center w-10 bg-[#F4F4F4] border-l border-[#DCDCDC]"
            >
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.15152 10V0H5.84848V10H4.15152ZM0 5.84848V4.15152H10V5.84848H0Z"
                  fill="#3B3B3B"
                />
              </svg>
            </button>
          </div>
        </div>
        <button
          type="button"
          onClick={addToCart}
          className="flex-1 bg-brandColor rounded flex justify-center items-center"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 5.5V0H7V5.5H12V7H7V12H5.5V7H0V5.5H5.5Z"
              fill="white"
            />
          </svg>
          <span className="text-white ml-1">Add To Bag</span>
        </button>
      </div>
    </div>
  );
}
