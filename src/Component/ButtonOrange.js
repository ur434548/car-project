import React from "react";

export default function ButtonOrange({ text, className }) {
  return (
    <div>
      <button
        className={`bg-custom-orange text-white rounded-lg w-[111px] h-[39px]  p[10px,25px] ${className}`}
      >
        {text}
      </button>
    </div>
  );
}
