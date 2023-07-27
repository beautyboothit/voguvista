type Props = {};

export default function Size({}: Props) {
  return (
    <div className="mt-9">
      <div className="flex justify-between items-center">
        <span className="flex items-center">
          <span className="text-blackColor font-medium">Size: </span>
          <span className="text-black font-semibold ml-1"> L</span>
        </span>
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
                d="M9.83 2C9.83 2 9.11812 2.25 8 2.25C6.88188 2.25 6.17 2 6.17 2C6.05751 2 5.94584 2.01902 5.83969 2.05625L1 3.75L1.51969 6.5L3.04719 6.6725C3.23425 6.69367 3.40651 6.78441 3.52976 6.92671C3.65301 7.06901 3.71824 7.25246 3.7125 7.44063L3.5 15H12.5L12.2875 7.44063C12.2818 7.25246 12.347 7.06901 12.4702 6.92671C12.5935 6.78441 12.7658 6.69367 12.9528 6.6725L14.4803 6.5L15 3.75L10.1603 2.05625C10.0542 2.01902 9.94249 2 9.83 2Z"
                stroke="#3B3B3B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.4159 2.14563C10.2742 2.67818 9.96046 3.14899 9.52355 3.48485C9.08664 3.8207 8.551 4.00279 7.99992 4.00279C7.44884 4.00279 6.9132 3.8207 6.47629 3.48485C6.03938 3.14899 5.72569 2.67818 5.58398 2.14563"
                stroke="#3B3B3B"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <a
            href="#"
            className="text-[12px] text-blackColor ml-2 underline underline-offset-2"
          >
            Size Guide
          </a>
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <a
          href=""
          className="rounded w-10 h-10 border-2 border-brandColor flex justify-center items-center"
        >
          S
        </a>
        <a
          href=""
          className="rounded w-10 h-10 border border-PaleGray flex justify-center items-center"
        >
          M
        </a>
        <a
          href=""
          className="rounded w-10 h-10 border border-PaleGray flex justify-center items-center"
        >
          L
        </a>
        <a
          href=""
          className="rounded w-10 h-10 border border-PaleGray flex justify-center items-center"
        >
          XL
        </a>
      </div>
    </div>
  );
}
