import React, { useState } from "react";
import { RiChatUploadLine } from "react-icons/ri";
import { ImageToBase64 } from "../utility/ImagetoBase64";
import { toast } from "react-hot-toast";

const NewProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [apiURL, setApiURL] = useState(
    "https://southwing-cafeteria.onrender.com"
  );

  const uploadImage = async (e) => {
    const data = await ImageToBase64(e.target.files[0]);

    setData((prev) => {
      return {
        ...prev,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);

    const { name, category, image, price } = data;

    if (name && category && image && price) {
      try {
        const fetchData = await fetch(`${apiURL}/products/uploadProduct`, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(data),
        });

        const fetchRes = await fetchData.json();
        toast(fetchRes.message);
        setData(() => {
          return {
            name: "",
            category: "",
            image: "",
            price: "",
            description: "",
          };
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      toast("Please enter required fields");
    }
  };

  return (
    <div className="p-4">
      <form
        className="m-auto w-full max-w-lg  shadow flex flex-col p-3  bg-yellow"
        onSubmit={handleSubmit}
      >
        {/* NAME */}
        <label htmlFor="name">Name</label>
        <input
          type={"text"}
          name="name"
          className=" p-1 my-1"
          onChange={handleOnChange}
          value={data.name}
        />

        {/* CATEGORY */}
        <label htmlFor="category">Category</label>
        <select
          className=" p-1 my-1"
          id="category"
          name="category"
          onChange={handleOnChange}
          value={data.category}
        >
          <option value={"other"}>Select Category</option>
          <option value={"flavourful glazed chicken"}>
            Flavourful Glazed Chicken
          </option>
          <option value={"chicken sandwiches"}>Chicken Sandwiches</option>
          <option value={"egg drop toastie"}>Egg Drop Toastie</option>
          <option value={"drinks"}>Drinks</option>
        </select>

        {/* IMAGE */}
        <label htmlFor="image">
          Image
          <div className="h-40 w-full my-1 bg-white rounded flex items-center justify-center cursor-pointer">
            {data.image ? (
              <img src={data.image} className="h-full" alt="" />
            ) : (
              <span className="text-5xl">
                <RiChatUploadLine />
              </span>
            )}
            <input
              type={"file"}
              accept="image/*"
              id="image"
              onChange={uploadImage}
              className="hidden"
            />
          </div>
        </label>

        {/* PRICE */}
        <label htmlFor="price" className="my-1">
          Price
        </label>
        <input
          type={"text"}
          className="p-1 my-1"
          name="price"
          onChange={handleOnChange}
          value={data.price}
        />

        {/* DESCRIPTION */}
        <label htmlFor="description">Description</label>
        <textarea
          rows={3}
          className=" p-1 my-1 resize-none"
          name="description"
          onChange={handleOnChange}
          value={data.description}
        />
        <button className="bg-marron hover:bg-darkRed text-white text-lg font-bold my-2 drop-shadow">
          Save
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
