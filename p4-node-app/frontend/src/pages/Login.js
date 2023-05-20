import React, { useState } from "react";
import headAnimation from "../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loginRedux } from "../redux/userSlice.js";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleShowPassword = () => {
    setShowPassword((previous) => !previous);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    if (email && password) {
      try {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/users/login`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const dataRes = await fetchData.json();
        console.log(dataRes);

        toast(dataRes.message);

        if (dataRes.alert) {
          dispatch(loginRedux(dataRes));
          setTimeout(() => {
            navigate("/");
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please enter required fields");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-yellow m-auto flex flex-col p-4">
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img src={headAnimation} alt="head-profile" className="w-full"></img>
        </div>
        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="on"
            className="w-full bg-lightYellow px-2 py-1 mt-2 mb-2 rounded border-none outline-none"
            value={data.email}
            onChange={handleOnChange}
          ></input>

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-lightYellow rounded mt-2 mb-2 ">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              autoComplete="on"
              className="w-full bg-lightYellow border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            ></input>
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className=" w-full max-w-[150px] m-auto  bg-marron hover:bg-darkRed cursor-pointer text-white text-xl font-medium py-1 text-center rounded-full mt-4">
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-3">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="text-darkRed underline hover:text-white"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
