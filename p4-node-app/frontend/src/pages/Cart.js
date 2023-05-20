import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../components/CartProduct";
import emptyBox from "../assets/empty-box.gif";
import { toast } from "react-hot-toast";
import { clearCart } from "../redux/productSlice";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  console.log(productCartItem);

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );

  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  const dispatch = useDispatch();

  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-marron my-2">
          Your Cart Items
        </h2>

        {productCartItem[0] ? (
          <div className="my-4 mx-2 flex max-[425px]:flex-col gap-3">
            {/* display cart items */}
            <div className="w-full max-w-4xl">
              {productCartItem.map((el) => {
                return (
                  <CartProduct
                    key={el._id}
                    id={el._id}
                    name={el.name}
                    image={el.image}
                    category={el.category}
                    price={el.price}
                    qty={el.qty}
                    total={el.total}
                  />
                );
              })}
            </div>

            {/* total cart items */}
            <div className="w-full max-w-3xl bg-peach my-2 rounded m-auto p-2">
              <h2 className="text-white py-2 px-1 tx-2xl font-semibold bg-marron">
                Your Order
              </h2>
              <div className="flex w-full py-4 text-lg border-b border-grey">
                <p className="text-marron font-semibold">Total Qty : </p>
                <p className="ml-auto w-32 font-bold text-marron">{totalQty}</p>
              </div>
              <div className="flex w-full py-4 text-lg border-b border-grey">
                <p className="text-marron font-semibold">Total Price : </p>
                <p className="ml-auto w-32 font-bold text-marron">
                  <span className="text-marron text-base mx-1">₱</span>
                  {totalPrice}
                </p>
              </div>
              <button
                className="w-full bg-blue text-xl font-semibold text-white py-2 my-2 transition-all duration-200 ease-in-out transform scale-100 hover:scale-105 flex justify-center"
                onClick={() => {
                  dispatch(clearCart());
                  toast("Thank you for your purchase!");
                }}
              >
                Pay Now
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col w-full justify-center items-center my-5">
              <img src={emptyBox} alt="" className="w-full max-w-xl rounded" />
              <p className="text-marron font-bold text-2xl py-3">
                Empty Cart, Please add items
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
