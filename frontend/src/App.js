import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  // eslint-disable-next-line no-unused-vars
  const [apiURL, setApiURL] = useState(
    "https://southwing-cafeteria.onrender.com"
  );

  const getProduct = async () => {
    try {
      const response = await axios.get(`${apiURL}/products`);

      dispatch(setDataProduct(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Toaster />
      <div>
        <Header />
        <main className="pt-24 bg-peach min-h-[calc(100vh)]">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
