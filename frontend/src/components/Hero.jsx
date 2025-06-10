import Hero1 from "../assets/1440_550_copy_3.webp";
import Hero2 from "../assets/1440_550_copy_2_1.webp";
import Hero3 from "../assets/1440_550_copy_4.webp";
import Hero4 from "../assets/1440_550_copy_6_1.webp";
import Hero5 from "../assets/1440_550_1.webp";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  const images = [
    {
      src: Hero1,
      alt: "Image 1",
    },
    {
      src: Hero2,
      alt: "Image 2",
    },
    {
      src: Hero3,
      alt: "Image 3",
    },
    {
      src: Hero4,
      alt: "Image 4",
    },
    {
      src: Hero5,
      alt: "Image 5",
    },
  ];
  return (
    <div>
      <ImageSlider images={images} />
    </div>
  );
};

export default Hero;
