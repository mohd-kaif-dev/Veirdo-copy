import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";

const ProductSlider = ({ products, isLoading }) => {
  const scrollRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScollRight, setCanScollRight] = useState(false);

  const scroll = (direction) => {
    const scrollAmount = direction === "left" ? -320 * 4 - 45 : 320 * 4 + 45;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const currentX = e.pageX - scrollRef.current.offsetLeft;
    const walk = currentX - startX;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUporLeave = () => {
    setIsDragging(false);
  };

  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const righScrollable =
        container.scrollWidth > leftScroll + container.clientWidth + 1;
      setCanScrollLeft(leftScroll > 0);
      setCanScollRight(righScrollable);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
      updateScrollButtons();
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  });

  return (
    <div className="relative">
      {isLoading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900"></div>
        </div>
      ) : products.length < 1 ? (
        <div className="text-center p-4">No images to display.</div>
      ) : (
        <div className="relative">
          <div className="w-full max-w-[1330px] overflow-hidden rounded-lg shadow-lg">
            {/* Navigation Buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute top-1/2 -left-5 -translate-y-1/2 cursor-pointer z-10"
              aria-label="Previous slide"
              disabled={!canScrollLeft}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
                className="hover:fill-[#865CFD] group disabled:fill-gray-400"
              >
                <g filter="url(#filter0_d_1167_53402)">
                  <rect
                    width="32"
                    height="32"
                    rx="8"
                    transform="matrix(1 0 0 -1 1.5 32)"
                    fill="white"
                    shape-rendering="crispEdges"
                  ></rect>
                  <rect
                    x="0.25"
                    y="-0.25"
                    width="31.5"
                    height="31.5"
                    rx="7.75"
                    transform="matrix(1 0 0 -1 1.5 31.5)"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="0.5"
                    shape-rendering="crispEdges"
                  ></rect>
                  <rect
                    width="2.51607"
                    height="2.39439"
                    transform="matrix(-1 0 -0.0153903 -0.999882 17.9189 15.2859)"
                    fill="#865CFD"
                    className="group-hover:fill-white"
                  ></rect>
                  <rect
                    width="2.51607"
                    height="2.39439"
                    transform="matrix(-1 0 -0.0153903 -0.999882 20.3994 12.892)"
                    fill="#865CFD"
                    className="group-hover:fill-white"
                  ></rect>
                  <rect
                    width="2.51607"
                    height="2.39439"
                    transform="matrix(-1 0 -0.0153903 -0.999882 15.8184 17.6798)"
                    fill="#865CFD"
                    className="group-hover:fill-white"
                  ></rect>
                  <rect
                    width="2.51607"
                    height="2.39439"
                    transform="matrix(-1 0 -0.0153903 -0.999882 17.9932 20.0739)"
                    fill="#865CFD"
                    className="group-hover:fill-white"
                  ></rect>
                  <rect
                    width="2.51607"
                    height="2.39439"
                    transform="matrix(-1 0 -0.0153903 -0.999882 20.5459 22.4678)"
                    fill="#865CFD"
                    className="group-hover:fill-white"
                  ></rect>
                </g>
                <defs>
                  <filter
                    id="filter0_d_1167_53402"
                    x="0.5"
                    y="0"
                    width="33"
                    height="33"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dx="-1" dy="1"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.52549 0 0 0 0 0.360784 0 0 0 0 0.992157 0 0 0 1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1167_53402"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1167_53402"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute top-1/2 -right-5 -translate-y-1/2 cursor-pointer z-10"
              aria-label="Next slide"
              disabled={!canScollRight}
            >
              {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="33"
                viewBox="0 0 34 33"
                fill="none"
                className="hover:fill-[#865CFD] group disabled:fill-gray-400"
              >
                <g filter="url(#filter0_d_1167_53409)">
                  <rect
                    width="32"
                    height="32"
                    rx="8"
                    transform="matrix(1 0 0 -1 0.5 32)"
                    fill="white"
                    shape-rendering="crispEdges"
                  ></rect>
                  <rect
                    x="0.25"
                    y="-0.25"
                    width="31.5"
                    height="31.5"
                    rx="7.75"
                    transform="matrix(1 0 0 -1 0.5 31.5)"
                    stroke="black"
                    stroke-opacity="0.2"
                    stroke-width="0.5"
                    shape-rendering="crispEdges"
                  ></rect>
                  <rect
                    width="2.51607"
                    height="2.39439"
                    transform="matrix(1 0 0.0153903 -0.999882 16.8193 15.286)"
                    fill="#865CFD"
                    className="group-hover:fill-white"
                  ></rect>
                  <rect
                    width="2.51607"
                    height="2.39439"
                    transform="matrix(1 0 0.0153903 -0.999882 14.3389 12.8921)"
                    fill="#865CFD"
                    className="group-hover:fill-white"
                  ></rect>
                  <rect
                    width="2.51607"
                    height="2.39439"
                    transform="matrix(1 0 0.0153903 -0.999882 18.9199 17.6799)"
                    fill="#865CFD"
                    className="group-hover:fill-white"
                  ></rect>
                  <rect
                    width="2.51607"
                    height="2.39439"
                    transform="matrix(1 0 0.0153903 -0.999882 16.7451 20.074)"
                    fill="#865CFD"
                    className="group-hover:fill-white"
                  ></rect>
                  <rect
                    width="2.51607"
                    height="2.39439"
                    transform="matrix(1 0 0.0153903 -0.999882 14.1924 22.4679)"
                    fill="#865CFD"
                    className="group-hover:fill-white"
                  ></rect>
                </g>
                <defs>
                  <filter
                    id="filter0_d_1167_53409"
                    x="0.5"
                    y="0"
                    width="33"
                    height="33"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood
                      flood-opacity="0"
                      result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dx="1" dy="1"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.52549 0 0 0 0 0.360784 0 0 0 0 0.992157 0 0 0 1 0"
                    ></feColorMatrix>
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1167_53409"
                    ></feBlend>
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1167_53409"
                      result="shape"
                    ></feBlend>
                  </filter>
                </defs>
              </svg>
            </button>
            <div
              ref={scrollRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUporLeave}
              onMouseLeave={handleMouseUporLeave}
              className={`overflow-x-scroll flex relative select-none snap-both md:snap-none rounder-lg space-x-2 p-2 ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
            >
              {products.map((product, index) => (
                <div key={index} className="snap-center md:snap-none">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
