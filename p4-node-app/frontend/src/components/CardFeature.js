import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartItem } from "../redux/productSlice";
import { RxCrossCircled } from "react-icons/rx";
import Item from "../pages/Item";

const CardFeature = ({ image, name, price, category, id, onDelete }) => {
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);

  const handleAddCartProduct = (e) => {
    dispatch(
      addCartItem({
        _id: id,
        image: image,
        name: name,
        price: price,
        category: category,
      })
    );
  };

  return (
    <div className="w-full min-w-[200px] max-w-[300px] bg-lightYellow hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col">
      {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
        <div className=" w-full flex justify-end gap-3 my-2 ">
          <button
            onClick={onDelete}
            className="rounded transition-all duration-200 ease-in-out transform scale-100 hover:scale-105"
          >
            <RxCrossCircled size={25} color="#841b1b" />
          </button>
        </div>
      )}
      <Link to={`/order/${id}`}>
        <div className="h-32 flex flex-col justify-center items-center">
          <img src={image} alt="" className="h-full w-48" />
        </div>
        <h3 className="font-semibold text-marron text-lg mt-4 ">{name}</h3>
        <p className="text-red">{category}</p>
        <p className="font-bold py-3">
          <span className="text-red">₱</span>
          <span className="text-marron text-xl">{price}</span>
        </p>
      </Link>
      <button
        className="bg-yellow rounded my-2 py-1 transition-all duration-200 ease-in-out transform scale-100 hover:scale-105 w-full"
        onClick={handleAddCartProduct}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CardFeature;
