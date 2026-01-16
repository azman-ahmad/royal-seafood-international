"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Collapse } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { products } from "@/data/products";
import { Card } from "@/components/Card";

const { Panel } = Collapse;

export default function ProductDetailPage() {
  const { category, slug } = useParams<{ category: string; slug: string }>();
  const router = useRouter();
  const product = products.find(
    (p) => p.category === category && p.slug === slug
  );

  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="py-20 text-center text-sm text-gray-500">
        Product not found
      </div>
    );
  }

  const changeImage = (dir: "next" | "prev") => {
    setActiveImage((i) =>
      dir === "next"
        ? (i + 1) % product.images.length
        : (i - 1 + product.images.length) % product.images.length
    );
  };
  const related = products.filter(
    (p) => p.category === "black-tiger" && p.slug !== product.slug
  );
  const { specifications, sizes } = product;
  useEffect(() => {
    if (!product?.images?.length) return;

    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % product.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [product]);

  return (
    <div>
      <div className="mx-auto max-w-380 px-4 py-14 text-black">
        <div className="mb-12 text-center">
          <h1 className="text-[42px] font-semibold text-gray-900">
            {product.name.toUpperCase()}
          </h1>
          <p className="mt-1 text-xl uppercase tracking-[0.3em] ">
            {product.category.replace("-", " ")}
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="mx-auto w-full">
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => changeImage("prev")}
                className="rounded-full bg-white p-3 shadow hover:bg-gray-100"
              >
                <LeftOutlined />
              </button>

              <div className="relative h-111.25 w-full max-w-xl">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>

              <button
                onClick={() => changeImage("next")}
                className="rounded-full bg-white p-3 shadow hover:bg-gray-100"
              >
                <RightOutlined />
              </button>
            </div>

            <div className="mt-4 flex gap-3 max-w-xl mx-auto ">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`relative h-29 w-[calc((100%-16px)/3)] rounded-lg border ${
                    activeImage === i ? "border-emerald-600" : "border-gray-200"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-contain " />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-semibold uppercase">
              Specifications
            </h3>

            <ul className="space-y-2 text-gray-700 text-sm">
              {Object.entries(specifications).map(([key, value]) => (
                <li key={key} className="flex gap-2">
                  <p className="font-semibold capitalize text-black">
                    {key.replace(/([A-Z])/g, " $1")}:
                  </p>{" "}
                  {value}
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <h4 className="mb-2 text-xl font-semibold uppercase">
                Available Sizes
              </h4>
              {sizes.semiIqf && (
                <p className="text-sm">
                  <span className="font-semibold">Semi IQF:</span>{" "}
                  {sizes.semiIqf}
                </p>
              )}
              {sizes.iqf && (
                <p className="text-sm">
                  <span className="font-semibold">IQF:</span> {sizes.iqf}
                </p>
              )}

              {sizes.block && (
                <p className="text-sm mt-1">
                  <span className="font-semibold">Block:</span> {sizes.block}
                </p>
              )}
            </div>
            {product.description && (
              <div className="mt-6 max-w-4xl">
                <h3 className="mb-3 text-xl font-semibold uppercase ">
                  Description
                </h3>
                <p className="text-gray-700  text-justify">
                  {product.description}
                </p>
              </div>
            )}
            {product.keyFeatures && (
              <div className="mt-8 max-w-4xl">
                <Collapse bordered={false} expandIconPosition="end">
                  <Panel
                    header="KEY FEATURES AND BENEFITS"
                    key="1"
                    className="text-xl bg-foreground"
                  >
                    <p className="text-gray-700 text-base text-justify">
                      {product.keyFeatures}
                    </p>
                  </Panel>
                </Collapse>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="my-5">
        {related.length > 0 && (
          <div className="bg-foreground">
            <section className="mx-auto max-w-380 px-4 py-10 sm:px-6  mt-14">
              <h3 className="my-8 text-black text-4xl font-semibold">
                Also you may like
              </h3>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <Card
                    key={item.id}
                    image={item.images[0]}
                    title={item.name}
                    onViewDetail={() =>
                      router.push(`/products/${item.category}/${item.slug}`)
                    }
                  />
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}
