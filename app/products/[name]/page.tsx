import data from "@/data/products.json";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

export function generateStaticParams() {
  return data.products.map((product) => ({
    name: product.slug, // MUST match [name]
  }));
}

interface PageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function ProductDetails({ params }: PageProps) {
  const { name } = await params; // ✅ REQUIRED in Next 15+

  const product = data.products.find(
    (p) => p.slug === name
  );

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold mb-8">
          {product.name}
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-auto object-cover rounded-lg"
          />

          <div className="md:w-1/2">
            <p className="text-gray-700 mb-4">
              {product.description}
            </p>

            <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
