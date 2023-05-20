import React, { useState } from "react";
import headAnimation from "../assets/login-animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImageToBase64 } from "../utility/ImagetoBase64";
import { RiChatUploadLine } from "react-icons/ri";
import { toast } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  // eslint-disable-next-line no-unused-vars
  const [apiURL, setApiURL] = useState(
    "https://southwing-cafeteria.onrender.com"
  );

  const handleShowPassword = () => {
    setShowPassword((previous) => !previous);
  };

  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((previous) => !previous);
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

  const handleUploadProfileImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);
    console.log(data);

    setData((previous) => {
      return {
        ...previous,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        try {
          const fetchData = await fetch(`${apiURL}/users/register`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const dataRes = await fetchData.json();
          console.log(dataRes);

          toast(dataRes.message);
          if (dataRes.alert) {
            navigate("/login");
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        toast("password and confirm password must be the same");
      }
    } else {
      toast("Please enter required fields");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-yellow m-auto flex flex-col p-4">
        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img
            src={data.image ? data.image : headAnimation}
            alt="head-profile"
            className="w-full h-full"
          />

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-grey bg-opacity-50 w-full text-center cursor-pointer ">
              <p className="text-xl p-1 flex justify-center">
                <RiChatUploadLine />
              </p>
            </div>
            <input
              type={"file"}
              id="profileImage"
              accept="image/*"
              className="hidden"
              onChange={handleUploadProfileImage}
            />
          </label>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            autoComplete="on"
            className="w-full bg-lightYellow px-2 py-1 mt-2 mb-2 rounded border-none outline-none"
            value={data.firstName}
            onChange={handleOnChange}
          ></input>
          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            autoComplete="on"
            className="w-full bg-lightYellow px-2 py-1 mt-2 mb-2 rounded border-none outline-none"
            value={data.lastName}
            onChange={handleOnChange}
          ></input>

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

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-lightYellow rounded mt-2 mb-2 ">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmPassword"
              autoComplete="on"
              className="w-full bg-lightYellow border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            ></input>
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button className=" w-full max-w-[150px] m-auto  bg-marron hover:bg-darkRed cursor-pointer text-white text-xl font-medium py-1 text-center rounded-full mt-4">
            Register
          </button>
        </form>
        <p className="text-left text-sm mt-3">
          Already have an account?{" "}
          <Link
            to={"/login"}
            className="text-darkRed underline hover:text-white"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
