import React, { useState, useEffect, useRef } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Clear timeout function to prevent memory leaks
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  // Autoplay effect
  useEffect(() => {
    resetTimeout(); // Clear any existing timeout
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      4000 // 4 seconds
    );

    // Cleanup on component unmount or re-render
    return () => {
      resetTimeout();
    };
  }, [currentIndex, images.length]); // Re-run effect when currentIndex or images length changes

  const goToPrevious = () => {
    resetTimeout(); // Stop autoplay when manual control is used
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    resetTimeout(); // Stop autoplay when manual control is used
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!images || images.length === 0) {
    return <div className="text-center p-4">No images to display.</div>;
  }

  return (
    <div className="relative mb-8">
      <div className="w-full max-w-[1354px] mx-auto overflow-hidden rounded-lg shadow-lg">
        {/* Slider Images */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-96 object-cover"
                // You might want to set a fixed height for consistency, e.g., h-96
                // style={{ height: '24rem' }} // For h-96 equivalent
              />
            </div>
          ))}
        </div>
      </div>
      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-10 -translate-y-1/2 cursor-pointer z-10"
        aria-label="Previous slide"
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="33"
          viewBox="0 0 34 33"
          fill="none"
          className="hover:fill-[#865CFD] group"
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
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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
        onClick={goToNext}
        className="absolute top-1/2 right-10 -translate-y-1/2 cursor-pointer z-10"
        aria-label="Next slide"
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
          className="hover:fill-[#865CFD] group"
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
              <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
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

      {/* Dot Indicators (Optional but good for UX) */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              resetTimeout(); // Stop autoplay when manual control is used
              setCurrentIndex(idx);
            }}
            className={`w-1 h-1 ${
              currentIndex === idx
                ? "bg-black rotate-[45deg]"
                : "bg-zinc-700 rotate-0"
            } focus:outline-none focus:ring-2 focus:ring-white`}
            aria-label={`Go to slide ${idx + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
