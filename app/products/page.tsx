import Hero from "@/views/homepage/hero";
import { products } from "@/data/products.json";
import Link from "next/link";


export default function Products() {
  return (
    <>
      <div className="min-h-screen">
        {/* Products page content with hero and list of products */}
        <Hero />
        <div className="container mx-auto py-16">
          <h1 className="text-4xl font-bold mb-8">Our Products</h1>
          {/* Product listing would go here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Product cards would go here */}
            {
              products.map((product: IBeautyProduct) => (
                <Link href={`/products/${product.slug}`} key={product.id}>

                  <div key={product.id} className="border p-4 rounded-lg shadow-md">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                      View Details
                    </button>
                  </div>
                </Link>
              ))
            }
            <div className="border p-4 rounded-lg shadow-md">
              <img
                src="/images/products/heropng.png"
                alt="Product Image"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">Product Name</h2>
              <p className="text-gray-600 mb-4">Brief description of the product.</p>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
