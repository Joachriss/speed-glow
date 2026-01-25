"use client";

import Image from "next/image";
import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";

interface BeautyHeroProps {
  title: string;
  subtitle: string;
  punchline: string;
  image: string;
  ctaText?: string;
  ctaLink?: string;
  dimBackground?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  punchline,
  image,
  ctaText,
  ctaLink,
  dimBackground=true,
}: BeautyHeroProps) {
  return (
    <section className="relative h-[75vh] min-h-130 w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 ${dimBackground ? "bg-black/50" : ""} `} />

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <Typography
            variant="overline"
            className="text-red-400 font-semibold tracking-widest"
          >
            {subtitle}
          </Typography>

          <Typography variant="h2" className="mt-3 font-bold leading-tight">
            {title}
          </Typography>

          <Typography className="mt-6 text-lg text-gray-200">
            {punchline}
          </Typography>

          {ctaText && ctaLink && (
            <div className="mt-8">
              <Button
                href={ctaLink}
                size="large"
                className="
                  rounded-full bg-white px-8 py-3 text-gray-900
                  hover:bg-gray-100 normal-case font-semibold
                "
              >
                {ctaText}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
