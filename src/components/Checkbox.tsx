import React from "react";

interface CheckboxProps {
  checked: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked }) => {
  return (
    <label className="flex w-6 h-6 items-center justify-center cursor-pointer">
      <input type="checkbox" className="peer sr-only" checked={checked} readOnly />
      <div
        className={`w-[18px] h-[18px] rounded border flex items-center justify-center  
        ${checked ? "bg-green-400 border-transparent" : "border-green-400"}   
        peer-checked:bg-green-400 peer-checked:border-transparent`}
      >
        <svg
          className={`w-3.5 h-3.5 ${checked ? "text-black" : "hidden"}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M13.78 3.22a.75.75 0 01.073.977l-.073.084-7 7a.75.75 0 01-.977.073l-.084-.073-3-3a.75.75 0 01.977-1.133l.084.073L6.5 9.94l6.72-6.72a.75.75 0 011.06 0z"
          />
        </svg>
      </div>
    </label>
  );
};

export default Checkbox;
