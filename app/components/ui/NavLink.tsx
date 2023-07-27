import Link from "next/link";

type Props = {
  label: string;
  href: string;
};

export default function NavLink({ label, href }: Props) {
  return (
    <Link className="nav_item" href={href}>
      {label}
    </Link>
  );
}
