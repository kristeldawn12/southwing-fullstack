import React from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  deleteCartItem,
  increaseQty,
  decreaseQty,
} from "../redux/productSlice.js";

const CartProduct = ({ id, name, image, category, qty, total, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="gap-1">
      <div className="bg-white p-2 my-2 flex rounded border-2 border-yellow">
        <div className=" rounded overflow-hidden flex items-center ">
          <img src={image} alt="" className="w-56 h-40 object-cover p-3 " />
        </div>
        <div className="flex flex-col gap-1 p-2 md:p-2 w-full">
          <div className="flex justify-between">
            <h3 className="font-semibold text-marron text-lg mt-4 md:text-xl ">
              {name}
            </h3>
            <div
              className="cursor-pointer text-2xl text-grey hover:text-red"
              onClick={() => dispatch(deleteCartItem(id))}
            >
              <RiDeleteBinFill />
            </div>
          </div>

          <p className=" text-marron text-md md:text-base font-semibold">
            {category}
          </p>

          <p className="font-bold md:text-xl my-1 ">
            <span className="text-red text-lg">₱</span>
            <span className="text-marron text-xl">{price}</span>
          </p>
          <div className="flex justify-between">
            <div className=" flex gap-2 items-center">
              <button
                onClick={() => dispatch(decreaseQty(id))}
                className="bg-yellow text-darkRed  text-2xl rounded p-1 transition-all duration-200 ease-in-out transform scale-100 hover:scale-105 flex justify-center"
              >
                <FiMinus />
              </button>
              <p className="text-lg text-marron font-semibold p-1">{qty}</p>
              <button
                onClick={() => dispatch(increaseQty(id))}
                className="bg-yellow text-darkRed text-2xl rounded p-1 transition-all duration-200 ease-in-out transform scale-100 hover:scale-105 flex justify-center"
              >
                <FiPlus />
              </button>
            </div>
            <div className="flex items-center gap-2 font-semibold text-marron">
              <p className=" text-lg min-[425px]:text-md mx-2">Total</p>
              <p>
                <span className="text-lg">₱</span>
                <span className="text-2xl min-[425px]:text-[18px]">
                  {total}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
