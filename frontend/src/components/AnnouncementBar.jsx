import { useState, useEffect, useRef } from "react";

const messages = [
  "Printed Oversized T-shirts(Buy any 3 @1199)",
  "Plus Size T-shirts(Buy any 3 @1399)",
  "Prepaid Orders will be shipped on Priority",
  "Printed Oversized T-shirts(Buy any 3 @1199)",
  "Plus Size T-shirts(Buy any 3 @1399)",
  "Prepaid Orders will be shipped on Priority",
  "Printed Oversized T-shirts(Buy any 3 @1199)",
  "Plus Size T-shirts(Buy any 3 @1399)",
  "Prepaid Orders will be shipped on Priority",
];

const AnnouncementBar = () => {
  const [index, setIndex] = useState(0);
  const messagesRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.style.transform = `translateX(-${index * 100}%)`;
      messagesRef.current.style.transition = "transform 0.5s ease-in-out";
    }
  }, [index]);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % messages.length);
  };

  const handlePrev = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + messages.length) % messages.length
    );
  };

  return (
    <div className="h-8 overflow-hidden flex items-center justify-center bg-[#2d8ce3]">
      <button onClick={handlePrev} className="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          ></path>
        </svg>
      </button>
      <div className=" overflow-hidden text-white max-w-2xl">
        <div ref={messagesRef} className="flex">
          {messages.map((message, i) => (
            <div
              key={i}
              className="w-full px-4 py-2 text-[22px] font-[Onest-semibold] text-center uppercase"
              style={{ minWidth: "100%" }}
            >
              {message}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ffffff"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default AnnouncementBar;
