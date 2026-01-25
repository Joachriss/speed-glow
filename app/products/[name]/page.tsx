import data from "@/data/products.json";
import { notFound } from "next/navigation";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import Link from "next/link";

export const dynamic = "force-static";

export function generateStaticParams() {
  return data.products.map((product) => ({
    name: product.slug,
  }));
}

interface PageProps {
  params: {
    name: string;
  };
}

export default async function ProductDetails({ params }: PageProps) {
  const {name} = await params;
  const product = data.products.find(
    (p) => p.slug === name
  );

  if (!product) notFound();

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <PageHero
        title={product.name}
        subtitle={product.brand}
        punchline="Designed to nourish, protect, and enhance your natural glow — effortlessly."
        image={`${product.image}`}
      />

      {/* PRODUCT CONTENT */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 gap-16 md:grid-cols-2 items-start">

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute -inset-8 bg-pink-300/20 blur-3xl rounded-full" />
            <Image
              src={`${product.image}`}
              alt={product.name}
              width={600}
              height={700}
              className="relative rounded-3xl object-cover shadow-xl"
            />
          </div>

          {/* DETAILS */}
          <div>
            <p className="uppercase tracking-wide text-gray-400 mb-2">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold mb-6">
              {product.name}
            </h1>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {product.description}
            </p>

            {/* CTA */}
            <Link href="/products"
              className="
                rounded-full bg-gray-900 px-8 py-3 text-white text-lg
                hover:bg-gray-800 transition
              "
            >
              View other products
            </Link>

            {/* EXTRA INFO */}
            <div className="mt-10 border-t pt-6 text-sm text-gray-500">
              <p>✔ Dermatologist tested</p>
              <p>✔ Suitable for all skin types</p>
              <p>✔ Cruelty-free & clean ingredients</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
