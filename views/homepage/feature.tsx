"use client";

import React from "react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  SparklesIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";
import { Typography } from "@mui/material";
import FeatureCard from "@/components/feature-card";
import { motion } from "motion/react";
const FEATURES = [
  {
    icon: SparklesIcon,
    title: "Instant Radiance",
    children:
      "Speed Glow products are designed to deliver a luminous glow within minutes, giving your skin a fresh, vibrant look instantly.",
  },
  {
    icon: HeartIcon,
    title: "Gentle & Skin-Friendly",
    children:
      "Formulated with dermatologically tested ingredients, Speed Glow ensures your skin feels nourished, hydrated, and cared for without irritation.",
  },
  {
    icon: LockClosedIcon,
    title: "Long-Lasting Protection",
    children:
      "Enjoy all-day confidence with products that lock in moisture, protect against environmental stressors, and keep your glow intact.",
  },
  {
    icon: CursorArrowRaysIcon,
    title: "Smart Beauty Innovation",
    children:
      "Harness advanced skincare technology that adapts to your skin’s needs, offering personalized benefits for a flawless finish.",
  },
];

export function Features() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-28 px-4"
    >
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto mb-20 text-center"
      >
        <Typography color="error" className="mb-2 font-bold uppercase">
          Speed Glow Beauty
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          All-Day Radiance Starts Here
        </Typography>
        <Typography
          variant="body2"
          className="mx-auto w-full px-4 text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Unlock deeply hydrated, smoother, and visibly brighter skin with Speed Glow — skincare made to glow with your lifestyle, not just for photos.
        </Typography>
      </motion.div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </motion.section>
  );
}
export default Features;
