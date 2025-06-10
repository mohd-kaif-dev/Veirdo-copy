import Image1 from "../assets/ProductImage1.webp";
import Image2 from "../assets/ProductImage6.webp";
import Image3 from "../assets/ProductImage7.webp";
import Image4 from "../assets/ProductImage8.webp";
import Image5 from "../assets/ProductImage5.webp";
import ProductSlider from "./ProductSlider";
import { useEffect, useState } from "react";
import axios from "axios";

const CenterStage = () => {
  // const products = [
  //   {
  //     id: 1,
  //     title: "Originals Beige Oversized Graphic Printed Tshirt",
  //     price: 100,
  //     compare_at_price: 200,
  //     image: Image1,
  //   },
  //   {
  //     id: 2,
  //     title: "Classic Black Slim-Fit Jeans",
  //     price: 120,
  //     compare_at_price: 250,
  //     image: Image2,
  //   },
  //   {
  //     id: 3,
  //     title: "Sporty Black Denim T-shirt",
  //     price: 180,
  //     compare_at_price: 300,
  //     image: Image3,
  //   },
  //   {
  //     id: 4,
  //     title: "Vintage Leather Jacket",
  //     price: 220,
  //     compare_at_price: 400,
  //     image: Image4,
  //   },
  //   {
  //     id: 5,
  //     title: "Minimalist Silver Watch",
  //     price: 150,
  //     compare_at_price: 275,
  //     image: Image5,
  //   },
  // ];
  const [products, setProducts] = useState([]);
  const BACKEND_URL =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

  useEffect(() => {
    axios
      .get(`${BACKEND_URL} /api/products`)
      .then((res) => {
        setProducts(res.data.slice(15, 22)); // Assuming you want the first 5 products
        // console.log(res.data[0].variants[0].price);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="flex items-center justify-center gap-2 flex-col my-16">
      <h1 className="font-[soraSemibold] text-[18px] uppercase">
        Center Stage Collection
      </h1>
      <ProductSlider products={products} />
      <div class="flex justify-center  pr-4 lg:pr-0  mt-[16px] lg:mt-6 w-full">
        <a class="flex items-center w-full lg:w-1/4" href="#">
          <div class="flex justify-center cursor-pointer h-12 shop-all-button_wrapper w-full ">
            <button class=" font-[soraSemiBold] flex justify-center text-center items-center shop-all-button ">
              EXPLORE ALL PRODUCTS
            </button>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CenterStage;
