import React from "react";
import background from "../assests/pics/backgorund.png";
import ButtonOrange from "../Component/ButtonOrange";

export default function Portal() {
  return (
    <div
      className=" bg-cover bg-center h-[653px] flex  flex-col content-center justify-center items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div>
        <h1 className="text-[66px] font-bold font-poppins w-[681px] text-center  h-[152px] leading-[76px] tracking-wide items-center text-white">
          We make your drive
          <span className="text-custom-orange"> memorable</span>
        </h1>
      </div>
      <div>
        <p className="w-[603px] h-[48px] text-white leading-6 items-center tracking-wide mb-10 ml-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          temporibus, sit illo officia facere tempora minus expedita cupiditate
          placeat nesciunt.
        </p>
      </div>
      <div>
        <ButtonOrange
          text="Let's see vedio"
          className="text-white w-[165px] h-[39px] items-center text-base"
        />
      </div>
    </div>
  );
}
