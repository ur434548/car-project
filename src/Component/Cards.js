import React from "react";

export default function Cards({ icon, title, description }) {
  return (
    <div className="bg-gray-100 rounded-[24px] p-8 text-center w-[349px] h-[365px]">
      <div className="flex items-center justify-center bg-custom-orange text-white rounded-full w-[128px] h-[128px] mx-auto mb-4 mt-10">
        {icon}
      </div>

      <h3 className="text-xl font-semibold  leading-[24.2px] tracking-wide mt-6 mb-2">
        {title}
      </h3>

      <p className="text-sm w-[226px] h-[48px] text-gray-600 flex justify-center ml-8">{description}</p>
    </div>
  );
}
