import VannameiImg from "@/../public/images/Vannamei.webp";
import scampiImg from "@/../public/images/scampi.webp";
import blackTigerImg from "@/../public/images/back-tiger.jpg";
import { PremiumCard } from "../PremiumCard";
export default function PremiumProducts() {
  const ProductCategory = [
    {
      id: 1,
      name: "Black Tiger",
      image: blackTigerImg,
      description: "Premium black tiger shrimp sourced from sustainable water",
      url: "/black-tiger",
    },
    {
      id: 2,
      name: "Fresh water scampi",
      image: scampiImg,
      description: "Premium black tiger shrimp sourced from sustainable water",

      url: "/fresh-water-scampi",
    },
    {
      id: 3,
      name: "Vannamei",
      image: VannameiImg,
      description: "Premium black tiger shrimp sourced from sustainable water",
      url: "/vannamei",
    },
  ];
  return (
    <div>
      <section aria-labelledby="premium-selection-heading" className="">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className=" flex w-full justify-center items-center h-16 mb-12 ">
            <p className="text-3xl  font-bold uppercase tracking-[0.2em] text-black">
              Our Premium Products
            </p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ProductCategory.map((product) => (
            <PremiumCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
