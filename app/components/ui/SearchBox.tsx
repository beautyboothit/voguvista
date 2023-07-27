type Props = {};

export default function SearchBox({}: Props) {
  return (
    <div className="search_box relative flex-1">
      <div className="icon">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="search 1">
            <path
              id="Vector"
              d="M13.1629 13.1759L17.5 17.5M15 8.75C15 12.2017 12.2017 15 8.75 15C5.29822 15 2.5 12.2017 2.5 8.75C2.5 5.29822 5.29822 2.5 8.75 2.5C12.2017 2.5 15 5.29822 15 8.75Z"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </div>
      <input className="input" type="text" placeholder="Search ..." />
    </div>
  );
}
