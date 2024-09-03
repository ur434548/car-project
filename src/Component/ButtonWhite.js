import React from "react";

export default function ButtonOrange({ text, className }) {
  return (
    <div>
      <button
        className={` text-custom-orange rounded-lg border w-[111px] h-[39px] border-custom-orange p[10px,25px] ${className}`}
      >
        {text}
      </button>
    </div>
  );
}
