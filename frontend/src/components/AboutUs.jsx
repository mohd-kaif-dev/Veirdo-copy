import { useEffect, useState } from "react";
import Image1 from "../assets/About1.webp";
import Image2 from "../assets/About2.webp";
import Image3 from "../assets/About3.webp";

const AboutUs = () => {
  const [visibleIndex, setVisibleIndex] = useState(-1);
  const items = [
    { text: "bold", subText: "But never curt" },
    { text: "unapologetic", subText: "But never disrespectful" },
    { text: "explicit", subText: "But never assertive" },
    { text: "rebellious", subText: "But never scandalous" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) =>
        prevIndex < items.length - 1 ? prevIndex + 1 : 0
      );
    }, 2000); // Adjust timing as needed

    return () => clearInterval(interval);
  }, [visibleIndex, items.length]);
  return (
    <section className="container mx-auto max-w-5xl rounded-2xl">
      <section className="flex-col">
        <div className="flex-col">
          <div className="w-full  p-4  hidden lg:block">
            <div className="flex flex-col relative  cards-backgroundDesktop">
              <div className="flex flex-row ">
                <div className="flex-1 p-4">
                  <div className="flex flex-row h-full items-center">
                    <div className="basis-1/4"></div>

                    <div className="basis-5/7 mb-28">
                      <div className="p-4 mt-[20px]  flex  ">
                        <div className="w-full  top-[32px] left-181 transform rotate-0">
                          <div
                            className="font-[benzinBold] text-[26px] lg:text-[32px] font-normal leading-44 tracking-tighter text-left ml-[15%]"
                            style={{ color: "#ffffff" }}
                          >
                            ABOUT US
                          </div>
                        </div>
                      </div>

                      <div className="flex">
                        <div className="w-full h-112 top-[32px] left-181 transform rotate-0">
                          <div
                            className="font-[ibmMedium] text-sm lg:text-xl font-normal leading-44 tracking-tighter text-left ml-[15%] mr-[20%]"
                            style={{ color: "#ffffff" }}
                          >
                            Be bold, be you, be Veirdo! The coolest streetwear
                            brand for Gen-Z is here! Veirdo is all about
                            standing out in the crowd, expressing yourself with
                            creativity and making an uber stylish statement.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-4">
                  <div className="flex flex-row">
                    <div className="basis-2/5">
                      <div
                        className="flex flex-col gap-[4px] mt-[20%]  aspect-square "
                        style={{ rotate: "4deg" }}
                      >
                        <figure className="w-full flex aspect-[5/7]">
                          <img
                            onerror="imageError(this)"
                            src={Image1}
                            alt=""
                            className="w-full h-full object-cover rounded-lg lg:rounded-xl border-[#EEE] border-[0.5px] shadow-[4px_4px_0_0_white]"
                            width="1760"
                            height="1980"
                            loading="lazy"
                          />
                        </figure>
                      </div>
                    </div>
                    <div className="basis-2/5 flex-col ml-[5%] ">
                      <div
                        className="w-[80%] mt-[10%]"
                        style={{ rotate: "-3.868deg" }}
                      >
                        <figure className="w-full flex aspect-[5/7] ml-[20%]">
                          <img
                            onerror="imageError(this)"
                            src={Image2}
                            alt=""
                            className="w-full h-full object-cover rounded-lg lg:rounded-xl border-[#EEE] border-[0.5px] shadow-[4px_4px_0_0_white] }};"
                            width="1760"
                            height="1980"
                            loading="lazy"
                          />
                        </figure>
                      </div>

                      <div
                        className="w-[80%] mt-[10%]"
                        style={{ rotate: "-3.868deg" }}
                      >
                        <figure className="w-full flex aspect-[5/7]">
                          <img
                            onerror="imageError(this)"
                            src={Image3}
                            alt=""
                            className="w-full h-full object-cover rounded-lg lg:rounded-xl border-[#EEE] border-[0.5px] shadow-[4px_4px_0_0_white]"
                            width="1760"
                            height="1980"
                            loading="lazy"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full relative   flex  items-center cards-footer-backgroundDesktop mt-[-45px] rounded-b-2xl py-4">
                <div className=" h-20 w-full flex justify-center items-start gap-4">
                  <div
                    className=" w-1/2 font-[benzinBold] text-4xl text-white h-full items-center flex  justify-end"
                    style={{ color: "#ffffff" }}
                  >
                    We are
                  </div>
                  <ul className=" text-left w-1/2 overflow-hidden list-none">
                    {items.map((item, index) => (
                      <li
                        key={index}
                        className={`font-[benzinBold] text-primary-500 py-[6px] ${
                          index === visibleIndex
                            ? "translate-y-0"
                            : "hidden translate-y-4"
                        }`}
                      >
                        <span
                          className=" font-[benzinBold] text-4xl leading-none"
                          style={{ color: "#121212" }}
                        >
                          {item.text}
                          <br />
                          <p
                            className=" font-[ibmMedium] text-xl"
                            style={{ color: "#121212" }}
                          >
                            {item.subText}
                          </p>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
