import CategoryImage1 from "../assets/ProductImage1.webp";
import CategoryImage2 from "../assets/CategoryImage2.webp";
import CategoryImage3 from "../assets/CategoryImage3.webp";
import CategoryImage4 from "../assets/CategoryImage4.webp";

const TopCategory = () => {
  const categories = [
    {
      title: "Oversized T-Shirts",
      image: CategoryImage1,
      link: "#",
    },
    {
      title: "Acid Wash T-shirts",
      image: CategoryImage2,
      link: "#",
    },
    {
      title: "Plus Size T-Shirts",
      image: CategoryImage3,
      link: "#",
    },
    {
      title: "Cargo",
      image: CategoryImage4,
      link: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center gap-2 flex-col my-16">
      <h1 className="font-[soraSemibold] text-[18px] uppercase">
        Top Category
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {categories.map((category) => (
          <div
            key={category.title}
            className="flex items-center justify-center flex-col gap-2 cursor-pointer p-1 border-[0.5px] border-gray-300 rounded-2xl"
          >
            <img
              src={category.image}
              alt={category.title}
              className="w-56 h-96 object-cover rounded-2xl"
            />
            <p className="text-xl font-[ibmMedium]">{category.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
