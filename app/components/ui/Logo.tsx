import Image from "next/image";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className="">
      {/* <img src="/logo.png" alt="" width="84px" />
       */}
      <Image src="/logo.png" alt="Logo" width={84} height={84} />
    </div>
  );
}
