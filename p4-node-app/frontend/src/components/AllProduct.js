import React, { useEffect, useState } from "react";
import FilterProduct from "./FilterProduct";
import CardFeature from "./CardFeature";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const AllProduct = ({ heading }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [filterby, setFilterBy] = useState("");

  const productData = useSelector((state) => state.product.productList);

  const categoryList =
    productData && productData.length > 0
      ? [...new Set(productData.map((el) => el.category))]
      : [];

  const [filterData, setFilterData] = useState([]);

  const handleFilterProduct = (category) => {
    setFilterBy(category);
    const filter = productData.filter(
      (el) =>
        category === "" || el.category.toLowerCase() === category.toLowerCase()
    );

    setFilterData(() => {
      return [...filter];
    });
  };

  const handleDelete = async (id) => {
    console.log("Deleting product with id:", id);
    try {
      await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/products/${id}`, {
        method: "DELETE",
      });
      setFilterData(filterData.filter((el) => el._id !== id));
      toast.success("Product deleted successfully.");
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while deleting the product.");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    setFilterData(productData);
  }, [productData]);

  return (
    <div className="my-8">
      <h2 className="font-bold text-4xl text-darkRed text-center my-5">
        {heading}
      </h2>

      <div className="flex gap-4 justify-center items-center h-20 ">
        {categoryList[0] &&
          categoryList.map((el, index) => {
            return (
              <FilterProduct
                key={el}
                category={el}
                isActive={el.toLowerCase() === filterby.toLowerCase()}
                onClick={() => handleFilterProduct(el)}
              />
            );
          })}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-40">
          <svg
            width="120"
            height="30"
            viewBox="0 0 120 30"
            xmlns="http://www.w3.org/2000/svg"
            fill="#841b1b"
          >
            <circle cx="15" cy="15" r="15">
              <animate
                attributeName="r"
                from="15"
                to="15"
                begin="0s"
                dur="0.8s"
                values="15;9;15"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                from="1"
                to="1"
                begin="0s"
                dur="0.8s"
                values="1;.5;1"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="60" cy="15" r="9" fillOpacity="0.3">
              <animate
                attributeName="r"
                from="9"
                to="9"
                begin="0s"
                dur="0.8s"
                values="9;15;9"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                from="0.5"
                to="0.5"
                begin="0s"
                dur="0.8s"
                values=".5;1;.5"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="105" cy="15" r="15">
              <animate
                attributeName="r"
                from="15"
                to="15"
                begin="0s"
                dur="0.8s"
                values="15;9;15"
                calcMode="linear"
                repeatCount="indefinite"
              />
              <animate
                attributeName="fill-opacity"
                from="1"
                to="1"
                begin="0s"
                dur="0.8s"
                values="1;.5;1"
                calcMode="linear"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 ">
          {filterData?.map((el, index) => {
            return (
              <CardFeature
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                price={el.price}
                category={el.category}
                onDelete={() => handleDelete(el._id)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllProduct;
