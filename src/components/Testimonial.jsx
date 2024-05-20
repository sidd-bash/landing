import React from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

export default function Testimonial({ testimonial }) {
  return (
    <div className="flex flex-col px-4 py-3 border border-black rounded-xl">
      <div className="font-[900] ">{testimonial.name}</div>
      <div>{testimonial.message}</div>
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
