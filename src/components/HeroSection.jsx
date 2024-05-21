import React from "react";
import heroBearImage from "../images/heroBearImage.png";
import Button from "./Button";
import maskGroup from "../images/MaskGroup.png";
import curve2 from "../images/curve2bg.png";
import curve1 from "../images/curve1bg.png";

export default function HeroSection() {
  return (
    <div className="pt-[75px] pb-[181px] bg-[#FEF4DE]">
      <img src={curve1} alt="" className="absolute left-0 top-0 z-50" />
      <img
        src={maskGroup}
        alt=""
        className="absolute opacity-80 left-0 top-0 h-screen z-0"
      />
      <img src={curve2} alt="" className="absolute left-0 -bottom-40" />
      <div
        id="heroSection"
        className="flex justify-center font-poppins text-[#663128] gap-10 mb-40"
      >
        <div id="heroText" className="flex flex-col justify-end gap-5 z-50">
          <div className="flex flex-col">
            <span className="text-[115px] font-[900] leading-[100px]">What the</span>
            <span className="text-[58px] tracking-[.45em] font-[700] leading-[58px]">
              Bear Bears
            </span>
          </div>
          <div className="w-[552px] text-base font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </div>
          <div>
            <Button text={"Help Me"} bgYellow={true} />
            <Button text={"About Us"} />
          </div>
        </div>
        <div id="heroImage">
          <img src={heroBearImage} alt="" className="h-96" />
        </div>
      </div>
    </div>
  );
}
