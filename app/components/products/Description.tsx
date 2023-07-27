type Props = {};

export default function Description({}: Props) {
  return (
    <div className="mt-9">
      <h2 className="font-medium text-blackColor">Description</h2>
      <p className="text-[14px] text-muteColor my-[14px]">
        Sweet shades inspired by the delight of summer and ice cream that gives
        you extremely hydrated, refreshed, clear juicy lips.The high hydration
        level spreads the color evenly over the lips so the tint lasts longer
        with a single application.
      </p>
      <button
        type="button"
        className="f-14 text-lightBlack flex items-center gap-1 underline underline-offset-1"
      >
        read more
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
      </button>
    </div>
  );
}
