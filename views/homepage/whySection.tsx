"use client";

import Image from "next/image";
import { Typography } from "@mui/material";
import { motion } from "motion/react";

export function WhySection() {
  return (
    <motion.section
     initial={{ opacity: 0, y: 80 }} 
     whileInView={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8, ease: "easeOut" }}
     className="relative py-28 px-4 overflow-hidden"
     >
      {/* background accent */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-pink-50 via-white to-white" />

      <div className="container mx-auto max-w-6xl grid grid-cols-1 gap-16 md:grid-cols-2 items-center">

        {/* TEXT */}
        <div className="text-center md:text-left">
          <Typography color="error" className="mb-3 font-bold uppercase">
            Why Speed Glow?
          </Typography>

          <motion.div
            initial={{ opacity: 0, x: -50 }}          // start hidden and shifted down
            whileInView={{ opacity: 1, x: 0 }}       // animate when in view
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}   // only animate once, when 30% visible
          >
            <Typography variant="h2" className="mb-6">
              Your Glow, Made Simple
            </Typography>
          </motion.div>


          <Typography className="text-gray-500 text-lg leading-relaxed">
            Speed Glow was created to simplify skincare without sacrificing
            results. Every formula is thoughtfully crafted to hydrate,
            brighten, and restore confidence, no harsh chemicals, no
            complicated routines.
            <br />
            <br />
            Just clean, effective beauty you’ll love using every day.
          </Typography>
        </div>

        {/* IMAGE */}
        <div className="relative mx-auto w-full max-w-md">
          {/* glow */}
          <div className="absolute -inset-6 rounded-full bg-pink-400/20 blur-3xl" />

          {/* glass card */}
          <div className="relative rounded-3xl bg-white/70 p-4 shadow-xl backdrop-blur-md">
            <Image
              src="/images/gallery/hands.jpg"
              alt="Speed Glow Beauty Products"
              width={500}
              height={600}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default WhySection;
