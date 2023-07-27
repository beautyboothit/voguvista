

type Props = {};

export default function PromotionalOffer({}: Props) {
  return (
    <div className="mt-9 border border-greenColor p-5 rounded">
      <span className="text-[#009E6E] font-medium flex items-center gap-1">
        <span>
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_213_590)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.96812 7.20789C4.724 7.96474 5.95018 7.96474 6.70655 7.20789C7.46291 6.45104 7.46291 5.22387 6.70655 4.46751C5.95018 3.71017 4.724 3.71017 3.96812 4.46751C3.21175 5.22387 3.21175 6.45104 3.96812 7.20789ZM1.40765 0.981445H7.91139C8.42484 0.981445 8.51843 1.20545 9.00764 1.71745L13.8488 6.54412L6.03552 14.3575L1.1817 9.51915C0.770067 9.108 0.478179 8.90339 0.478179 8.39139V1.90752C0.478179 1.39649 0.894675 0.981445 1.40765 0.981445ZM6.02195 5.15261C6.40013 5.53079 6.40013 6.1446 6.02195 6.52279C5.64377 6.90097 5.03043 6.90097 4.65273 6.52279C4.27407 6.1446 4.27407 5.53079 4.65273 5.15261C5.03043 4.77394 5.64377 4.77394 6.02195 5.15261ZM15.4101 8.1005C16.196 8.88353 16.196 10.1538 15.4101 10.9368L10.4307 15.9022C9.64473 16.6852 8.37104 16.6852 7.5851 15.9022L6.72254 15.0421L14.5359 7.22872L15.4101 8.1005Z"
                fill="#009E6E"
              />
            </g>
            <defs>
              <clipPath id="clip0_213_590">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="matrix(-1 0 0 1 16 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        Promotional Offer
      </span>
      <div className="flex justify-between mt-[6px]">
        <span className="text-[12px] text-muteColor">
          Best Value - Buy 1 for Tk 500 to Tk 1500
        </span>
        <a
          className="flex items-center gap-1 underline underline-offset-1 text-[14px] text-lightBlack"
          href="#"
        >
          Visit Offer
          <span>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 0.5L6 5.5L1 10.5" stroke="black" stroke-width="1.4" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}
