"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Typography, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface IBeautyProduct {
    id: number;
    name: string;
    slug: string;
    category: string;
    image: string;
    brand: string;
    description: string;
}

interface Props {
    product: IBeautyProduct;
}


export default function ProductCard({ product }: Props) {
    const router = useRouter();

    const navigateToProductDetails = () => {
        router.push(`/products/${product.slug}`);
    };

    return (
        // <Link href={`/products/${product.slug}`}>
        <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => navigateToProductDetails()}
            className="group relative rounded-3xl bg-white shadow-sm hover:shadow-xl overflow-hidden"
        >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute -inset-20 bg-pink-300/20 blur-3xl" />
            </div>

            {/* Image */}
            <div className="relative aspect-4/5 overflow-hidden">
                <Image
                    src={`${product.image}`}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="relative z-10 p-6">
                <Typography
                    variant="caption"
                    className="uppercase tracking-wide text-gray-400"
                >
                    {product.category}
                </Typography>

                <Typography
                    variant="h6"
                    className="mt-1 font-semibold text-gray-900"
                >
                    {product.name}
                </Typography>

                <Typography className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {product.description}
                </Typography>

                {/* CTA */}
                <div className="mt-5">
                    <Link href={`/products/${product.slug}`}>
                        <Button
                            size="small"
                            className="
                rounded-full bg-gray-900 px-5 py-2 text-white
                hover:bg-gray-800 normal-case
              "
                        >
                            View Product
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
        // </Link>
    );
}
