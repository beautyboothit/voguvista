import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Logo({}: Props) {
  return (
    <Link href={"/"} className="">
      {/* <img src="/logo.png" alt="" width="84px" />
       */}
      <Image src="/logo.png" alt="Logo" width={84} height={84} />
    </Link>
  );
}
