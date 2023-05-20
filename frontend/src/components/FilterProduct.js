import React from "react";
import { IoFastFood } from "react-icons/io5";
import "../App.css";

const FilterProduct = ({ category, onClick, isActive }) => {
  return (
    <div className="flex flex-col hoverable">
      <div className=" flex justify-center">
        <div
          className={`text-xl p-4 my-2 bg-marron w-22 h-22 rounded-full text-peach cursor-pointer ${
            isActive ? "bg-marron" : "bg-yellow"
          }`}
          onClick={onClick}
        >
          <IoFastFood className="m-auto" />
        </div>
      </div>
      <div className="w-full">
        <p className="text-m text-center font-medium my-1 capitalize">
          <span className="category">{category}</span>
        </p>
      </div>
    </div>
  );
};

export default FilterProduct;
