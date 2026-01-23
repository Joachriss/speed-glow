"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Masonry from "@mui/lab/Masonry";
import {
  Box,
  Typography,
  Dialog,
  DialogContent,
  Button,
  Skeleton,
} from "@mui/material";

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  return (
    <div className="w-full">
      {/* Header */}
      <div className="container mx-auto mb-20 text-center">
        <Typography color="error" className="mb-2 font-bold uppercase">
          Our Gallery
        </Typography>
        <Typography variant="h2">Speed Glow Products</Typography>
      </div>

      {/* Masonry */}
      <Box sx={{ width: "100%", px: 1 }}>
        <Masonry columns={{ xs: 2, sm: 3, md: 4 }} spacing={1}>
          {itemData.map((item, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.96 }}   // 👈 tap feedback
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelected(item)}
            >
              {/* Skeleton */}
              {!loaded[index] && (
                <Skeleton
                  variant="rectangular"
                  className="absolute inset-0 z-10"
                />
              )}

              {/* Image */}
              <motion.div
                animate={{ opacity: loaded[index] ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                  placeholder="blur"
                  blurDataURL={item.blur}
                  loading="lazy"
                  onLoad={() =>
                    setLoaded((prev) => ({ ...prev, [index]: true }))
                  }
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity">
                <div className="p-4 flex flex-col">
                  <Typography className="text-white font-semibold">
                    {item.title}
                  </Typography>

                  <Typography variant="caption" className="text-gray-300">
                    Speed Glow Beauty
                  </Typography>

                  {/* CTA */}
                  <Button
                    size="small"
                    variant="contained"
                    color="error"
                    className="mt-3 bg-white text-gray-900 hover:bg-gray-100"
                    onClick={(e) => {
                      e.stopPropagation(); // 👈 prevent modal trigger
                      alert("Go to product page");
                    }}
                  >
                    View Product
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </Box>

      {/* MODAL */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        maxWidth="md"
        fullWidth
      >
        {selected && (
          <DialogContent className="p-0 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="relative h-100 md:h-full">
                <Image
                  src={selected.img}
                  alt={selected.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <Typography variant="h5" className="mb-2 font-bold">
                  {selected.title}
                </Typography>

                <Typography className="mb-4 text-gray-600">
                  A premium Speed Glow beauty product designed to enhance
                  your natural glow and confidence.
                </Typography>

                <Button
                  variant="contained"
                  size="large"
                  color="error"
                  className=""
                >
                  View Full Details
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}


const itemData = [
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Radiance Facial Serum",
    blur:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...",
  },
  {
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f",
    title: "Glow Boost Moisturizer",
    blur:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...",
  },
];
