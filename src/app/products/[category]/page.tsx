"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/Card";
import { products } from "@/data/products";
import { useParams } from "next/navigation";
export default function ProductsPage() {
  const router = useRouter();
  const params = useParams();
  const filteredProducts = products.filter(
    (p) => p.category === params.category
  );
  return (
    <div className="mx-auto max-w-380 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <header className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="mt-2 text-xl font-semibold  text-slate-900 sm:text-4xl">
            Products
          </h1>
        </div>
      </header>

      <section aria-label="Seafood products" className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              image={product.images[0]}
              title={product.name}
              onViewDetail={() =>
                router.push(`/products/${params.category}/${product.slug}`)
              }
            />
          ))}
        </div>
      </section>
    </div>
  );
}
