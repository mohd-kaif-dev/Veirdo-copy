import React from "react";
import Image from "../assets/ProductImage1.webp";
import RatingIcon from "../assets/icon-star.svg?react";
import WishList from "../assets/icon-wishlist.svg?react";

const ProductCard = ({ product }) => {
  console.log("Product Card", product);
  const calculateDiscount = (price, compare_at_price) => {
    const discount =
      ((Number(compare_at_price) - Number(price)) / Number(compare_at_price)) *
      100;
    return discount.toFixed(0);
  };
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-400 w-[320px] h-120 p-1 pb-0">
      <div className="relative">
        <div class="bg-white flex items-center absolute h-4 top-2 lg:top-4 p-[2px] lg:p-1 rounded-sm z-20 left-[1%]  ">
          <span class="uppercase text-[7px] lg:text-sm font-[ibmSemiBold] text-center text-[#2063A1]  ">
            Best Seller
          </span>
        </div>

        <div class="bg-white/50 absolute !left-[0.625rem] lg:!left-[0.75rem] !bottom-[0.625rem] lg:!bottom-[0.75rem] rounded-md px-2 py-1">
          <div class="flex gap-[2px] items-center justify-center ">
            <img
              src={RatingIcon}
              loading="lazy"
              alt="rating icon"
              width="15"
              height="15"
              class="lg:mt-1"
            />
            <div class="flex items-baseline justify-center gap-1 text-[11px] lg:text-sm font-[ibmMedium] text-[#51575C] ">
              <span>4.7</span>
              <span class="bg-[#AFB2B4] w-[2px] h-[9px] lg:h-[11px]"></span>
              <span>86</span>
            </div>
          </div>
        </div>

        <div class="bg-white/50 absolute !right-[0.625rem] lg:!right-[0.75rem] !bottom-[0.625rem] lg:!bottom-[0.75rem] z-[1] rounded-md px-2 py-1">
          <div class="flex items-center h-full ">
            <div class="flex gap-[8px] h-full">
              <div class="flex justify-center items-center lg:mt-0.5  w-6 ">
                {product.options[1].values.map((index) => (
                  <div
                    key={index}
                    class="flex  relative -top-[45%] lg:-top-[40%]"
                  >
                    <span
                      class={`border-[1px] border-[#F2F2F2] w-[14px] h-[14px] lg:w-3.5 lg:h-3.5 rounded-[50%] absolute  left-${
                        index * 2
                      }`}
                      style={{
                        backgroundColor:
                          product.options[1].values[index] || "white",
                      }}
                    ></span>
                  </div>
                ))}
              </div>

              <span class="text-[#51575C] text-xs font-[ibmMedium] flex items-center">
                {product.options[1].values.length}
              </span>
            </div>
          </div>
        </div>
        <img
          className="w-full h-80 object-cover rounded-lg border-[#EEE] border-[0.5px]"
          src={product.image.src}
          alt="Product"
        />
      </div>
      <section class=" pt-0 lg:pt-3 pb-2 px-2 lg:px-3 ">
        <div class=" flex flex-col gap-[2px]">
          <section class="flex gap-1 lg:gap-2 items-baseline flex-wrap">
            <span class="font-[ibmSemiBold] text-sm text-[#131814] ">
              ₹{product.variants[0].price}
            </span>

            <span class=" text-xs font-[ibmMedium] text-[#AFB2B4] line-through">
              ₹{product.variants[0].compare_at_price}
            </span>
            <span class="font-[ibmMedium] text-xs lg:text-sm text-[#00B53A] uppercase">
              {calculateDiscount(
                product.variants[0].price,
                product.variants[0].compare_at_price
              )}
              % off
            </span>
          </section>
          <h3 class="max-w-prose text-copy w-full overflow-hidden whitespace-nowrap text-ellipsis font-[ibmRegular] text-[#8A8E92] text-xs lg:text-sm">
            {product.title}
          </h3>
          <div class=" flex border-t-[0.5px] border-t-[#c9cbcc]">
            <button class="cursor-pointer flex p-2 items-center justify-center flex-1 border-r-[0.5px] border-r-[#c9cbcc]">
              <span class="text-[11px] lg:text-sm font-[soraSemiBold] text-[#131814]">
                ADD TO CART
              </span>
            </button>
            <button class="flex py-0 px-3 lg:px-4 justify-center items-center">
              <img
                src={WishList}
                width="20"
                height="20"
                alt="wishlist icon"
                loading="lazy"
              />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCard;
