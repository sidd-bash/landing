import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

export default function Testimonial({ testimonial }) {
  return (
    <div className="flex flex-col px-14 py-5 border border-black rounded-xl bg-white opacity-100 z-50 w-[512px] gap-2">
      <div className="font-[900] ">{testimonial.name}</div>
      <div className="text-[14px] w-[412px]">{testimonial.message}</div>
      <div className="flex">
        {Array.from({ length: testimonial.rating }, () => (
          <IoIosStar className="text-[#F3CE5E]" />
        ))}
        {Array.from({ length: 5 - testimonial.rating }, () => (
          <IoIosStarOutline className="text-[#F3CE5E]"/>
        ))}
      </div>
      
    </div>
  );
}
