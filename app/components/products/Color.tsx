import React from "react";

type Props = {};

export default function Color({}: Props) {
  return (
    <div className="mt-9">
      <span className="flex items-center">
        <span className="text-blackColor font-medium">Colour: </span>
        <span className="text-black font-semibold ml-1"> Sky Blue</span>
      </span>
      <div className="flex gap-3 mt-4">
        <a
          href="#"
          className="block w-12 h-12 rounded-md border-2 border-brandColor relative"
        >
          <img src="/color_image.png" alt="" />
          <span className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center z-10">
            <svg
              width="18"
              height="15"
              viewBox="0 0 18 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 7.46899L7.18591 13L17 1"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </span>
        </a>
        <a
          href="#"
          className="block w-12 h-12 rounded-md border border-PaleGray"
        >
          <img src="/color_image.png" alt="" />
        </a>
        <a
          href="#"
          className="block w-12 h-12 rounded-md border border-PaleGray"
        >
          <img src="/color_image.png" alt="" />
        </a>
      </div>
    </div>
  );
}
