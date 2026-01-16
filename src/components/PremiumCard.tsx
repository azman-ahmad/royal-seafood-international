"use client";
import Image, { StaticImageData } from "next/image";
import { RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
type PremiumProduct = {
  id: number;
  name: string;
  image: StaticImageData;
  description: string;
  url: string;
};
type PremiumCardProps = {
  product: PremiumProduct;
};

export function PremiumCard({ product }: PremiumCardProps) {
  const router = useRouter();
  return (
    <article
      className="group flex flex-col overflow-hidden rounded-2xl cursor-pointer border border-[#f8fafb] shadow-md  shadow-sky-[#f8fafb]/30 transition hover:-translate-y-1 "
      onClick={() => router.push(`/products/${product.url}`)}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0  via-transparent" />
      </div>
      <div className="flex flex-1 flex-col px-5 pb-5 pt-4 text-center text-black">
        <h3 className="text-2xl font-semibold ">{product.name}</h3>
        <div className="mt-6 flex items-center justify-between p-4 rounded-md hover:bg-primary bg-opacity-10   cursor-pointer text-primary  btn-bg hover:text-white ">
          <div className="text-xs font-semibold cursor-pointer transition hover:font-semibold  w-full ">
            <p className="text-base text-center">View Details</p>
          </div>
        </div>
      </div>
    </article>
  );
}
