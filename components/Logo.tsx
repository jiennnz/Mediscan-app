import React from "react";

const Logo = () => {
  return (
    <article className="mt-[32px] flex w-full flex-col items-center justify-center">
      <div className="flex items-center gap-x-[16px]">
        <div className="h-[56px] w-[56px] rounded-[30px] border-[1px] border-black25"></div>
        <div className="text-h4 font-bold">MediScan</div>
      </div>
    </article>
  );
};

export default Logo;
