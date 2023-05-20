import React, { useState } from "react";
import logo from "../assets/menu/southwing-logo.png";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((preview) => !preview);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("You have been logged out");
  };

  const cartItemNumber = useSelector((state) => state.product?.cartItem ?? []);

  return (
    <header className="fixed shadow-md w-full h-24 px-2 md:px-4 z-50 bg-yellow">
      {/* Desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-20">
            <img src={logo} alt="brand-logo" className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-7 text-base md:text-xl hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"order"}>Order</Link>
          </nav>
          <div className="text-3xl relative">
            <Link to={"cart"}>
              <FaShoppingCart />
              <div className="absolute -top-1 -right-1 bg-red h-4 w-4 m-0 p-0 rounded-full text-sm text-white text-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div onClick={handleShowMenu}>
            <div className="cursor-pointer text-4xl w-10 h-10 rounded-full overflow-hidden drop-shadow">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt="profile-pic"
                  className="h-full w-full"
                />
              ) : (
                <FaUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 px-3 text-base mt-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"new-product"}
                    className="whitespace-nowrap cursor-pointer"
                  >
                    New Product
                  </Link>
                )}

                {userData.image ? (
                  <p
                    className="cursor-pointer hover:text-yellow"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2 py-1"
                  >
                    Login
                  </Link>
                )}

                <nav className="text-base md:text-xl flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link to={"order"} className="px-2 py-1">
                    Order
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
