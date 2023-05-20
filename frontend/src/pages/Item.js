import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "../redux/productSlice";
import { useParams } from "react-router-dom";

const Item = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.find((el) => el._id === id);

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay));
  };

  return (
    <div className="flex justify-center p-2 md:p4 my-10">
      <div className="w-full max-w-2xl bg-white m-auto md:flex rounded p-3 flex flex-col items-center">
        <div className=" max-w-xl overflow-hidden w-full flex justify-center">
          <img
            src={productDisplay.image}
            alt=""
            className="hover:scale-105 transition-all"
          />
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-semibold text-marron text-3xl mt-4 md:text-4xl ">
            {productDisplay.name}
          </h3>
          <p className=" text-marron text-xl md:text-2xl font-semibold">
            {productDisplay.category}
          </p>
          <div className="text-marron text-lg text-center mt-2">
            <p>{productDisplay.description}</p>
          </div>
          <p className="font-bold md:text-2xl my-3 ">
            <span className="text-red text-lg">₱</span>
            <span className="text-marron text-3xl">{productDisplay.price}</span>
          </p>
          <div className=" flex">
            <button
              onClick={handleAddCartProduct}
              className="bg-marron text-white text-lg rounded my-2 py-2 min-w-[130px] transition-all duration-200 ease-in-out transform scale-100 hover:scale-105"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
