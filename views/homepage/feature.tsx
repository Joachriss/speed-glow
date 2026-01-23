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
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="error" className="mb-2 font-bold uppercase">
          Speed Glow Beauty
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Radiance That Shines Every Day
        </Typography>
        <Typography
          variant="body2"
          className="mx-auto w-full px-4 text-gray-500 lg:w-11/12 lg:px-8 "
        >
          Discover the power of Speed Glow products crafted to give your skin instant
          luminosity, lasting hydration, and protection against daily stressors. Whether
          you’re heading to work, out with friends, or preparing for a special occasion,
          Speed Glow fits seamlessly into your beauty routine.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Features;
