import { products } from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import PageHero from "@/components/common/PageHero";

export default function Products() {
  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <PageHero
        title="Glow Is Not A Trend. It’s A Lifestyle."
        subtitle="Speed Glow Collection"
        punchline="Luxury skincare crafted for real beauty lovers.  
        Clean formulas. Radiant skin. Confidence in every glow."
        image="/images/gallery/Web-02.jpg"
        // ctaText="Explore Collection"
        // ctaLink="#products"
        dimBackground={false}
      />

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">

          {/* Section Header */}
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-4">
              Our Beauty Essentials
            </h2>
            <p className="text-gray-500 text-lg">
              Every product is designed to nourish your skin, elevate your
              routine, and bring out your natural glow — effortlessly.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 ">
            {products.map((product: IBeautyProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
