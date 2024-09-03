import React from "react";
import {
  FaDollarSign,
  FaCar,
  FaFileInvoice,
  FaStar,
  FaTools,
  FaUser,
} from "react-icons/fa";
import ButtonWhite from "../Component/ButtonWhite";

export default function BodyCards() {
  return (
    <div className="flex justify-between items-center  p-12 max-w-[1440px] mx-auto">
      <div className="max-w-md">
        <h4 className="text-custom-color uppercase font-medium text-lg opacity-80 mb-6 mx-auto">
          best services
        </h4>
        <h1 className="text-custom-color leading-[76px] tracking-wide items-center text-[66px] font-bold font-poppins">
          Your drive <br /> with{" "}
          <span className="text-custom-orange">our care</span>
        </h1>
        <div className="w-[448px] mt-6 h-[132px] leading-[24px] tracking-wide text-custom-color text-base ">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
            quasi omnis blanditiis cum incidunt quos quis commodi impedit
            ratione,rnatur?
          </p>
          <p className="mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            officiis venia
          </p>
        </div>
        <ButtonWhite
          text=" Let's Try"
          className="font-base mt-10 w-[117px] h-[39px] leading-[19.36px] tracking-wide font-[600]"
        />
      </div>

      <div>
        <div className="flex mb-6 gap-6">
          <div className="bg-gray-100 rounded-lg p-6 text-center w-[180px] h-[180px]">
            <div className="bg-custom-orange text-white rounded-full mt-2 w-[44px] h-[44px] flex items-center justify-center mx-auto mb-4">
              <FaDollarSign size={24} />
            </div>
            <h3 className="text-base font-semibold mb-2  text-custom-color">
              Competitive Pricing
            </h3>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 text-center w-[180px] h-[180px]">
            <div className="bg-custom-orange text-white rounded-full mt-2 w-[44px] h-[44px] flex items-center justify-center mx-auto mb-4">
              <FaCar size={24} />
            </div>
            <h3 className="text-base font-semibold mb-2  text-custom-color">
              Easier Rent on your budget
            </h3>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 text-center w-[180px] h-[180px]">
            <div className="bg-custom-orange text-white rounded-full mt-2 w-[44px] h-[44px] flex items-center justify-center mx-auto mb-4">
              <FaFileInvoice size={24} />
            </div>
            <h3 className="text-base font-semibold mb-2  text-custom-color">
              Most Flexible payment plans
            </h3>
          </div>
        </div>

        <div className="flex  gap-6">
          <div className="bg-gray-100 rounded-lg p-6 text-center w-[180px] h-[180px]">
            <div className="bg-custom-orange text-white rounded-full mt-2 w-[44px] h-[44px]  flex items-center justify-center mx-auto mb-4">
              <FaStar size={24} />
            </div>
            <h3 className="text-base font-semibold mb-2  text-custom-color">
              The best extended auto warranties
            </h3>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 text-center  w-[180px] h-[180px]">
            <div className="bg-custom-orange text-white mt-2 w-[44px] h-[44px] rounded-full  flex items-center justify-center mx-auto mb-4">
              <FaTools size={24} />
            </div>
            <h3 className="text-base font-semibold mb-2 text-custom-color">
              Roadside Assistance 24/7
            </h3>
          </div>

          <div className="bg-gray-100 rounded-lg p-6 text-center w-[180px] h-[180px]">
            <div className="bg-custom-orange text-white rounded-full mt-2 w-[44px] h-[44px]  flex items-center justify-center mx-auto mb-4">
              <FaUser size={24} />
            </div>
            <h3 className="text-base font-semibold mb-2  text-custom-color">
              Your Choice of mechanic
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
