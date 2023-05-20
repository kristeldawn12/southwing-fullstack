import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  productList: [],
  cartItem: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setDataProduct: (state, action) => {
      state.productList = [...action.payload];
    },

    addCartItem: (state, action) => {
      const check = state.cartItem.some((el) => el._id === action.payload._id);
      // console.log(check);
      if (check) {
        toast("Item already in cart");
      } else {
        toast("Item added to cart");
        const total = action.payload.price;
        state.cartItem = [
          ...state.cartItem,
          { ...action.payload, qty: 1, total },
        ];
      }
    },

    deleteCartItem: (state, action) => {
      toast("Item deleted from cart");
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      state.cartItem.splice(index, 1);
    },

    increaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      const totalQty = ++qty;
      state.cartItem[index].qty = totalQty;

      const price = state.cartItem[index].price;
      const totalPrice = price * totalQty;
      state.cartItem[index].total = totalPrice;
    },

    decreaseQty: (state, action) => {
      const index = state.cartItem.findIndex((el) => el._id === action.payload);
      let qty = state.cartItem[index].qty;
      if (qty > 1) {
        const qtyMinus = --qty;
        state.cartItem[index].qty = qtyMinus;

        const price = state.cartItem[index].price;
        const totalPrice = price * qtyMinus;
        state.cartItem[index].total = totalPrice;
      }
    },

    clearCart: (state) => {
      state.cartItem = [];
    },
  },
});

export const {
  setDataProduct,
  addCartItem,
  deleteCartItem,
  increaseQty,
  decreaseQty,
  deleteProductItem,
  clearCart,
} = productSlice.actions;

export default productSlice.reducer;
