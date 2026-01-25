"use client";

import Image from "next/image";
import { Button, Typography, Box } from "@mui/material";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid min-h-196 bg-[#191919] px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="col-span-1"
          >
            <Typography
              variant="h2"
              sx={{ color: "#fff", fontWeight: 700 }}
              className="mb-4"
            >
              {/* All-Day Radiance <br /> Starts Here */}
              Transform <br />your skin today
              {/* Glow That Speaks Louder Than Words <br /> Everywhere You Go.” */}
              {/* Your Perfect <br /> Beauty Products */}
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#fff" }}
              className="mb-7 md:pr-16 xl:pr-28"
            >
              Reveal radiant, even-toned skin from head to toe with our complete Speed Glow collection.
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ color: "#fff", fontWeight: 600 }}
              className="mb-4"
            >
              Your glow deserves an encore.
            </Typography>

            <div className="flex flex-col mt-2 gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Link href="/products">
                <motion.button
                  className="flex flex-row ms-2 mt-2 py-2 px-4 uppercase rounded-md items-center gap-2 bg-red-700 text-white hover:bg-red-800 duration-300"
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: "loop" }}
                >
                  <ShoppingBagIcon className="h-6 w-6" />
                  Our Products
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          {/* <Image
            width={1080}
            height={576}
            src="/images/products/heropng.png"
            alt="phones"
            className="col-span-1 my-20 h-full max-h-60 -translate-y-32 md:max-h-124 lg:my-0 lg:ml-auto lg:max-h-160 lg:translate-y-0"
          /> */}
          <motion.img
            // initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, y: [-10, 0, -10] }}
            transition={{ duration: 3, repeat: Infinity, repeatType: "loop", ease: "linear" }}
            src="/images/products/heropng.png"
            alt="Products photo"
            className="w-full object-fill col-span-1 my-20 sm:scale-120 max-h-60 -translate-y-32 md:max-h-124 lg:my-0 lg:ml-auto lg:max-h-160 lg:translate-y-0"
          />
        </div>
      </header>

      {/* BOTTOM CARD */}
      <div className="mx-8 -mt-24 rounded-xl bg-white p-5 shadow-md md:p-14 lg:mx-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}          // start hidden and shifted down
          whileInView={{ opacity: 1, x: 0 }}       // animate when in view
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}   // only animate once, when 30% visible
        >
          <Typography variant="h4" className="mb-3 font-bold">
            Speed Glow Products
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}          // start hidden and shifted down
          whileInView={{ opacity: 1, y: 0 }}       // animate when in view
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}   // only animate once, when 30% visible
        >
          <Typography
            variant="body2"
            className="font-normal text-gray-500 lg:w-5/12"
          >
            Discover our curated selection of top-rated beauty products,
            designed to enhance your natural glow and boost your confidence.
          </Typography>
        </motion.div>
      </div>
    </div>
  );
}
