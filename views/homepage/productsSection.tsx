"use client";

import { Typography } from "@mui/material";
import { products } from "@/data/products.json";
import ProductCard from "@/components/ProductCard";
import { motion } from "motion/react";

export function ProductsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-28 px-4 overflow-hidden"
    >
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-pink-50 to-white" />

      {/* Header */}
      <div className="container mx-auto mb-20 text-center max-w-3xl">
        <Typography color="error" className="mb-2 font-bold uppercase">
          Our Products
        </Typography>

        <Typography variant="h2" className="mb-4">
          Explore Our Skincare Collection
        </Typography>

        <Typography className="text-gray-500 text-lg">
          Thoughtfully crafted beauty essentials designed to nourish,
          protect, and enhance your natural glow — every single day.
        </Typography>
      </div>

      {/* Grid */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </motion.section>
  );
}

export default ProductsSection;
