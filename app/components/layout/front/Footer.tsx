import React from "react";
import NavLink from "../../ui/NavLink";
import Logo from "../../ui/Logo";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="container mx-auto">
      <div className="section_intro">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center">
          <Logo />
          <div className="order-3 md:order-2 w-full md:w-auto mt-8 sm:mt-0">
            <nav className="flex flex-col sm:flex-row">
              <NavLink href="#" label="Overview" />
              <NavLink href="#" label="Features" />
              <NavLink href="#" label="Pricing" />
              <NavLink href="#" label="Careers" />
              <NavLink href="#" label="Help" />
              <NavLink href="#" label="Privacy Policy" />
            </nav>
          </div>

          <div className="order-2 sm:order-3">
            <nav className="flex gap-4">
              <a
                className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-brandColor"
                href=""
              >
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
                    d="M3.8581 1.86471C3.8581 2.90127 3.11338 3.73067 1.91757 3.73067H1.89563C0.744343 3.73067 0 2.90127 0 1.86471C0 0.806209 0.766979 0 1.94015 0C3.11338 0 3.83584 0.806209 3.8581 1.86471ZM3.63218 5.20416V15.9997H0.202779V5.20416H3.63218ZM15.9999 15.9997L16 9.80988C16 6.49401 14.3082 4.95069 12.0514 4.95069C10.2306 4.95069 9.41542 5.99848 8.9603 6.73354V5.20449H5.53046C5.57567 6.21747 5.53046 16 5.53046 16H8.9603V9.97087C8.9603 9.64822 8.98256 9.32637 9.07323 9.09536C9.32109 8.4508 9.88542 7.78345 10.8329 7.78345C12.0743 7.78345 12.5706 8.77338 12.5706 10.2241V15.9997H15.9999Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-brandColor"
                href=""
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.56 8C10.56 8.50632 10.4099 9.00127 10.1286 9.42226C9.84727 9.84325 9.44745 10.1714 8.97967 10.3651C8.51189 10.5589 7.99716 10.6096 7.50057 10.5108C7.00398 10.412 6.54783 10.1682 6.18981 9.81019C5.83178 9.45217 5.58797 8.99602 5.48919 8.49943C5.39041 8.00284 5.44111 7.48811 5.63487 7.02033C5.82863 6.55255 6.15675 6.15273 6.57774 5.87144C6.99873 5.59014 7.49368 5.44 8 5.44C8.67831 5.44211 9.32823 5.7125 9.80786 6.19214C10.2875 6.67177 10.5579 7.32169 10.56 8ZM16 4.48V11.52C16 12.7082 15.528 13.8477 14.6878 14.6878C13.8477 15.528 12.7082 16 11.52 16H4.48C3.29183 16 2.15232 15.528 1.31216 14.6878C0.471999 13.8477 0 12.7082 0 11.52V4.48C0 3.29183 0.471999 2.15232 1.31216 1.31216C2.15232 0.471999 3.29183 0 4.48 0H11.52C12.7082 0 13.8477 0.471999 14.6878 1.31216C15.528 2.15232 16 3.29183 16 4.48ZM11.84 8C11.84 7.24052 11.6148 6.49809 11.1928 5.86661C10.7709 5.23513 10.1712 4.74294 9.4695 4.4523C8.76784 4.16166 7.99574 4.08562 7.25085 4.23378C6.50597 4.38195 5.82174 4.74768 5.28471 5.28471C4.74768 5.82174 4.38195 6.50597 4.23378 7.25085C4.08562 7.99574 4.16166 8.76784 4.4523 9.4695C4.74294 10.1712 5.23513 10.7709 5.86661 11.1928C6.49809 11.6148 7.24052 11.84 8 11.84C9.01843 11.84 9.99515 11.4354 10.7153 10.7153C11.4354 9.99515 11.84 9.01843 11.84 8ZM13.12 3.84C13.12 3.65013 13.0637 3.46452 12.9582 3.30665C12.8527 3.14878 12.7028 3.02574 12.5274 2.95308C12.352 2.88042 12.1589 2.8614 11.9727 2.89845C11.7865 2.93549 11.6154 3.02692 11.4812 3.16118C11.3469 3.29544 11.2555 3.46649 11.2184 3.65271C11.1814 3.83893 11.2004 4.03196 11.2731 4.20738C11.3457 4.38279 11.4688 4.53272 11.6267 4.63821C11.7845 4.7437 11.9701 4.8 12.16 4.8C12.4146 4.8 12.6588 4.69886 12.8388 4.51882C13.0189 4.33879 13.12 4.09461 13.12 3.84Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-brandColor"
                href=""
              >
                <svg
                  width="16"
                  height="13"
                  viewBox="0 0 16 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.76891 3.4582L7.80362 4.02051L7.22556 3.95166C5.1215 3.68773 3.28332 2.79262 1.72254 1.28936L0.959579 0.543488L0.763035 1.0943C0.346809 2.32219 0.612701 3.61887 1.47979 4.49095C1.94223 4.97297 1.83817 5.04183 1.0405 4.75495C0.763035 4.66314 0.520214 4.59428 0.497144 4.62867C0.416226 4.70904 0.693687 5.75324 0.9133 6.1664C1.2139 6.74016 1.8266 7.30241 2.49715 7.63519L3.06364 7.89912L2.39309 7.91063C1.74568 7.91063 1.72255 7.92207 1.79196 8.16305C2.02315 8.90892 2.93645 9.70077 3.9538 10.045L4.67063 10.286L4.04629 10.6532C3.12142 11.1811 2.03471 11.4794 0.948009 11.5024C0.427727 11.5139 0 11.5597 0 11.5942C0 11.7089 1.41044 12.3516 2.23126 12.604C4.6937 13.3498 7.61864 13.0286 9.81519 11.7548C11.3759 10.8483 12.9366 9.04664 13.6649 7.30241C14.058 6.37291 14.4511 4.67458 14.4511 3.85984C14.4511 3.33199 14.4858 3.26313 15.1332 2.63202C15.5147 2.26477 15.8731 1.86312 15.9425 1.74843C16.058 1.53041 16.0465 1.53041 15.4569 1.72547C14.4743 2.0697 14.3355 2.0238 14.8211 1.50745C15.1794 1.1402 15.6072 0.474629 15.6072 0.279561C15.6072 0.245165 15.4338 0.302514 15.2372 0.40577C15.0292 0.520535 14.5667 0.69265 14.2199 0.795973L13.5956 0.991041L13.0291 0.612348C12.717 0.40577 12.2776 0.176306 12.0465 0.107446C11.4568 -0.0532256 10.5551 -0.0302721 10.0233 0.153353C8.57815 0.669765 7.66485 2.00084 7.76891 3.4582Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                className="flex justify-center items-center w-[30px] h-[30px] rounded-full bg-brandColor"
                href=""
              >
                <svg
                  width="8"
                  height="16"
                  viewBox="0 0 8 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.31961 16V7.99905H7.68633L8 5.24189H5.31961L5.32368 3.8619C5.32368 3.14277 5.39689 2.75747 6.50369 2.75747H7.98326V0H5.61621C2.77297 0 1.77228 1.33753 1.77228 3.58683V5.2422H0V7.99936H1.77228V16H5.31961Z"
                    fill="white"
                  />
                </svg>
              </a>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-10">
          <div className="flex gap-[18px]">
            <span className="icon w-[60px] h-[60px] bg-[#FFFAF5] flex justify-center items-center">
              <svg
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.51886"
                  width="28.6957"
                  height="20"
                  rx="3.47826"
                  fill="#EBC8B1"
                />
                <path
                  d="M18.0886 11.3223L29.3929 4.36582C30.0886 0.539737 26.4943 -0.12693 24.6102 0.0179979H4.17553C0.349444 0.0179979 0.262488 3.2064 0.69727 4.80061L12.0016 11.3223C13.3929 12.7137 16.6393 11.9021 18.0886 11.3223Z"
                  fill="#D1A333"
                />
              </svg>
            </span>
            <div className="flex flex-col">
              <h4 className="text-blackColor font-medium text-[24px]">
                Subscribe Our Newsletter
              </h4>
              <span className="text-[14px] text-muteColor">
                We‘ll Send you a nice letter once per week. No spam
              </span>
            </div>
          </div>
          <div className="flex gap-5">
            <input
              className="px-5 py-[13px] border border-brandColor rounded-md h-[50px]"
              type="text"
              placeholder="Enter your email"
            />
            <button className="px-[30px] py-[13px] bg-brandColor text-white rounded-md h-[50px]">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-full h-[1px] my-10 bg-PaleGray"></div>
        <div className="flex justify-center mb-10">
          <div className="">
            <nav>
              <span className="nav_item">&copy; 2023 Posh Fashion.</span>
              <a className="nav_item" href="">
                Terms
              </a>
              <a className="nav_item" href="">
                Privacy
              </a>
              <a className="nav_item" href="">
                Cookies
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
