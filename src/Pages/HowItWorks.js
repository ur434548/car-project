import React from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Example icon from react-icons
import Cards from "../Component/Cards";

export default function App() {
  return (
    <div className=" flex  gap-24 mt-28 w-[1274px] h-[668px] items-center font-poppins mx-auto text-custom-color">
      <div>
        <div>
          <Cards
            icon={<FaCalendarAlt className="w-[44px] h-[44px]" />}
            title="Pick-up date"
            description="Lorem ipsum dolor sit amet, consectetur consectetur adipiscing"
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-6">
          <h4 className="text-custom-color uppercase font-medium text-lg opacity-80	 mx-auto">
            how it works
          </h4>
          <h1 className="text-[66px] font-bold font-poppins w-[770px] ml-[-70px] h-[152px] leading-[76px] tracking-wide items-center text-custom-color">
            Your friends to make <br />&ensp;&ensp;&ensp;&ensp;your
            <span className="text-custom-orange"> tour easy</span>
          </h1>
          <p className="w-[603px] h-[48px] leading-6 items-center tracking-wide mb-10 ml-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            temporibus, sit illo officia facere tempora minus expedita
            cupiditate placeat nesciunt .
          </p>
        </div>
        <div className="flex flex-row gap-36">
          <Cards
            icon={<FaCalendarAlt className="w-[44px] h-[44px]" />}
            title="Choose a Location"
            description="Lorem ipsum dolor sit amet, consectetur  consectetur adipiscing"
          />

          <Cards
            icon={<FaCalendarAlt className="w-[44px] h-[44px]" />}
            title="Book Your Car"
            description="Lorem ipsum dolor sit amet, consectetur  consectetur adipiscing"
          />
        </div>
      </div>
    </div>
  );
}
