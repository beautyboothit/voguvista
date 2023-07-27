import React from "react";

type Props = {
  brand: string;
  rating: string;
  rating_count: string;
};

export default function BrandRating({ brand, rating, rating_count }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="rating flex items-center">
        <span className="mr-2 mb-0.5">
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 6.34697L9.036 5.79597L7.003 0.995972L4.97 5.79597L0 6.34697L3.71 9.86697L2.674 15L7 12.377L11.326 15L10.29 9.86697L14 6.34697Z"
              fill="#8E00E6"
            />
          </svg>
        </span>
        <span className="text-[14px] text-lightBlack">{rating}</span>
        <span className="text-[14px] text-muteColor">({rating_count})</span>
        <span className="font-medium text-lightBlack ml-[10px] underline underline-offset-1">
          {brand}
        </span>
      </div>

      <button
        type="button"
        className="px-3 py-[6px] rounded-3xl border border-[#FF437A]"
      >
        <svg
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5999 8.6842V11.0526H15.9997V12.6316H13.5991L13.5999 15H12L11.9992 12.6316H9.60015V11.0526H12V8.6842H13.5999ZM14.5942 1.38709C16.4037 3.17762 16.4661 6.0292 14.783 7.88841L13.6471 6.76894C14.7118 5.56578 14.6558 3.67894 13.4615 2.50262C12.2592 1.3192 10.3257 1.26867 9.06978 2.38183L8.00185 3.32762L6.93313 2.38262C5.67322 1.26788 3.74055 1.31683 2.53823 2.5042C1.34631 3.68051 1.28632 5.56341 2.38464 6.80762L9.12978 13.4755L8.00026 14.5934L1.21672 7.8892C-0.466363 6.0292 -0.403167 3.17288 1.40551 1.38709C3.21738 -0.400279 6.11558 -0.46028 8.00026 1.20709C9.87933 -0.457911 12.7839 -0.402648 14.5942 1.38709Z"
            fill="#FF437A"
          />
        </svg>
      </button>
    </div>
  );
}
