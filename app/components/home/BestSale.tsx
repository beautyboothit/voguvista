import Image from "next/image";
import React from "react";

type Props = {};

export default function BestSale({}: Props) {
  return (
    <div className="section_intro">
      <h2>Best selling Products</h2>
      <div className="grid grid-cols-12 gap-[30px]">
        <a href="#" className="col-span-4">
          <div className="flex items-center border border-baseColor rounded-xl text-center relative group">
            <div className="image w-[150px]">
            <Image layout="responsive"
            width={250}
            height={250} loading="lazy" src="/product/2.png" alt="" className="mix-blend-darken" />
            </div>
            <div className="flex flex-col items-start ml-6 text-left">
              <h3 className="line-clamp-1">
                Full Product name will be here in max two lines
              </h3>
              <h6 className="text-blackColor text-[20px] font-semibold mt-2">
                $678
              </h6>
            </div>

            <div className="absolute bottom-3 right-3 w-9 h-9 bg-PaleGray rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 9L7 16H9V9H16V7H9V0H7L7 7H0V9H7Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </a>
        <a href="#" className="col-span-4">
          <div className="flex items-center border border-baseColor rounded-xl text-center relative group">
            <div className="image w-[150px]">
            <Image layout="responsive"
            width={250}
            height={250} loading="lazy" src="/product/1.png" alt="" className="mix-blend-darken" />
            </div>
            <div className="flex flex-col items-start ml-6 text-left">
              <h3 className="line-clamp-1">
                Full Product name will be here in max two lines
              </h3>
              <h6 className="text-blackColor text-[20px] font-semibold mt-2">
                $678
              </h6>
            </div>

            <div className="absolute bottom-3 right-3 w-9 h-9 bg-PaleGray rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 9L7 16H9V9H16V7H9V0H7L7 7H0V9H7Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </a>
        <a href="#" className="col-span-4">
          <div className="flex items-center border border-baseColor rounded-xl text-center relative group">
            <div className="image w-[150px]">
            <Image layout="responsive"
            width={250}
            height={250} loading="lazy" src="/product/2.png" alt="" className="mix-blend-darken" />
            </div>
            <div className="flex flex-col items-start ml-6 text-left">
              <h3 className="line-clamp-1">
                Full Product name will be here in max two lines
              </h3>
              <h6 className="text-blackColor text-[20px] font-semibold mt-2">
                $678
              </h6>
            </div>

            <div className="absolute bottom-3 right-3 w-9 h-9 bg-PaleGray rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 9L7 16H9V9H16V7H9V0H7L7 7H0V9H7Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </a>
        <a href="#" className="col-span-4">
          <div className="flex items-center border border-baseColor rounded-xl text-center relative group">
            <div className="image w-[150px]">
            <Image layout="responsive"
            width={250}
            height={250} loading="lazy"src="/product/2.png" alt="" className="mix-blend-darken" />
            </div>
            <div className="flex flex-col items-start ml-6 text-left">
              <h3 className="line-clamp-1">
                Full Product name will be here in max two lines
              </h3>
              <h6 className="text-blackColor text-[20px] font-semibold mt-2">
                $678
              </h6>
            </div>

            <div className="absolute bottom-3 right-3 w-9 h-9 bg-PaleGray rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 9L7 16H9V9H16V7H9V0H7L7 7H0V9H7Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </a>
        <a href="#" className="col-span-4">
          <div className="flex items-center border border-baseColor rounded-xl text-center relative group">
            <div className="image w-[150px]">
            <Image layout="responsive"
            width={250}
            height={250} loading="lazy" src="/product/1.png" alt="" className="mix-blend-darken" />
            </div>
            <div className="flex flex-col items-start ml-6 text-left">
              <h3 className="line-clamp-1">
                Full Product name will be here in max two lines
              </h3>
              <h6 className="text-blackColor text-[20px] font-semibold mt-2">
                $678
              </h6>
            </div>

            <div className="absolute bottom-3 right-3 w-9 h-9 bg-PaleGray rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 9L7 16H9V9H16V7H9V0H7L7 7H0V9H7Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </a>
        <a href="#" className="col-span-4">
          <div className="flex items-center border border-baseColor rounded-xl text-center relative group">
            <div className="image w-[150px]">
            <Image layout="responsive"
            width={250}
            height={250} loading="lazy" src="/product/2.png" alt="" className="mix-blend-darken" />
            </div>
            <div className="flex flex-col items-start ml-6 text-left">
              <h3 className="line-clamp-1">
                Full Product name will be here in max two lines
              </h3>
              <h6 className="text-blackColor text-[20px] font-semibold mt-2">
                $678
              </h6>
            </div>

            <div className="absolute bottom-3 right-3 w-9 h-9 bg-PaleGray rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7 9L7 16H9V9H16V7H9V0H7L7 7H0V9H7Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
