type Props = {};

export default function ScrollBanner({}: Props) {
  return (
    <div className="section_intro">
      <div className="flex gap-[30px]">
        <div className="w-[60%]">
          <img src="/banner/3.png" alt="" />
        </div>
        <div className="w-[60%]">
          <img src="/banner/4.png" alt="" />
        </div>
        <div className="w-[60%]">
          <img src="/banner/5.png" alt="" />
        </div>
      </div>
    </div>
  );
}
