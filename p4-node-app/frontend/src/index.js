import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";
import Register from "./pages/Register";
import store from "./redux/index.js";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";
import Item from "./pages/Item";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="order" element={<Order />} />
      <Route path="login" element={<Login />} />
      <Route path="new-product" element={<NewProduct />} />
      <Route path="register" element={<Register />} />
      <Route path="cart" element={<Cart />} />
      <Route path="order/:id" element={<Item />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
