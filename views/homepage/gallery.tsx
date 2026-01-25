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
import { gallery } from "../../data/gallery.json";
import { useRouter } from "next/navigation";

export default function Gallery() {
  const [selected, setSelected] = useState<any>(null);
  const [loaded, setLoaded] = useState<Record<number, boolean>>({});
  const router = useRouter();

  const navigateTo = ()=>  {
    router.push(`/products`);
  }

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
        <Masonry columns={{ xs: 3, md: 4 }} spacing={1}>
          {gallery.map((item, index) => (
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
              <div className="hidden sm:flex absolute inset-0 flex-col justify-end bg-linear-to-t from-black/70 via-black/30 to-transparent opacity-100 md:opacity-0 md:hover:opacity-100 transition-opacity">
                <div className="p-4 flex flex-col">
                  <Typography className="text-white font-semibold">
                    {item.title}
                  </Typography>

                  <Typography variant="caption" className="text-gray-300">
                    Speed Glow Beauty
                  </Typography>

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
        slotProps={{
          paper(ownerState) {
            return {
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
                padding: 0,
              },
            };
          },
          backdrop: {
            style: {
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(6px)",
            },
          },
        }}
      >
        {selected && (
          <DialogContent className="p-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full min-h-[50vh] md:min-h-[80vh] rounded-3xl overflow-hidden p-0"
            >
              {/* IMAGE */}
              <Image
                src={selected.img}
                alt={selected.title}
                fill
                className="object-cover"
                priority
              />

              {/* DARK GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelected(null)}
                className="
            absolute top-4 right-4 z-20
            rounded-full text-white
            bg-black/50 p-2 
            hover:text-gray-200
             transition
          "
              >
                ✕
              </button>

              {/* CONTENT OVERLAY */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <Typography className="text-white text-2xl font-semibold">
                  {selected.title}
                </Typography>

                <Typography className="text-gray-300 mt-1">
                  Speed Glow Beauty
                </Typography>

                {/* CTA */}
                <div className="mt-6">
                  <Button
                    onClick={navigateTo}
                    size="large"
                    variant="contained"
                    color="error"
                    className="
                rounded-full bg-white px-8 py-3
                text-red-700 hover:bg-gray-100
                normal-case font-semibold
              "
                  >
                    View Product
                  </Button>
                </div>
              </div>
            </motion.div>
          </DialogContent>
        )}
      </Dialog>

    </div>
  );
}
