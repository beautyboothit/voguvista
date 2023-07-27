import Logo from "../../ui/Logo";
import NavLink from "../../ui/NavLink";
import SearchBox from "../../ui/SearchBox";
import UserCart from "../../ui/UserCart";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="h-[75px] flex items-center">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-3">
            <Logo />
          </div>
          <div className="col-span-5 hidden sm:block">
            <nav>
              <NavLink href="#" label="Women section" />
              <NavLink href="#" label="Shop" />
              <NavLink href="#" label="Offers" />
              <NavLink href="#" label=" New collections" />
            </nav>
          </div>
          <div className="col-span-4">
            <div className="flex">
              <SearchBox />
              <UserCart />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
