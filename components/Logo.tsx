import React from "react";

const Logo = () => {
  return (
    <article className="flex w-full flex-col items-center justify-center gap-y-[24px]">
      <div className="flex items-center gap-x-[16px]">
        <div className="h-[56px] w-[56px] rounded-[30px] border-[1px] border-black25"></div>
        <div className="text-h4 font-bold">MediScan</div>
      </div>

      {/* line */}
      <div className="h-[1px] w-[84%] bg-black25"></div>
    </article>
  );
};

export default Logo;
