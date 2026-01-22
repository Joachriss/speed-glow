"use client";

import Image from "next/image";
import { Button, Typography, Box } from "@mui/material";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header className="grid min-h-196 bg-[#191919] px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <Box className="col-span-1">
            <Typography
              variant="h2"
              sx={{ color: "#fff", fontWeight: 700 }}
              className="mb-4"
            >
              Your Perfect <br /> Beauty Products
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#fff" }}
              className="mb-7 md:pr-16 xl:pr-28"
            >
              Discover a world of beauty products that will elevate your
              skincare routine and leave you feeling radiant and beautiful.
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ color: "#fff", fontWeight: 600 }}
              className="mb-4"
            >
              See the products
            </Typography>

            <div className="flex flex-col mt-2 gap-2 md:mb-2 md:w-10/12 md:flex-row">
              <Button
                size="large"
                variant="contained"
                color="error"
                startIcon={<ShoppingBagIcon className="h-6 w-6" />}
                className="flex animate-pulse ease-in-out"
              >
                Our Products
              </Button>
            </div>
          </Box>

          {/* RIGHT IMAGE */}
          <Image
            width={470}
            height={576}
            src="/images/products/heropng.png"
            alt="phones"
            className="col-span-1 my-20 h-full max-h-60 -translate-y-32 md:max-h-124 lg:my-0 lg:ml-auto lg:max-h-160 lg:translate-y-0"
          />
        </div>
      </header>

      {/* BOTTOM CARD */}
      <div className="mx-8 -mt-24 rounded-xl bg-white p-5 shadow-md md:p-14 lg:mx-16">
        <Typography variant="h4" className="mb-3 font-bold">
          Speed Glow Products
        </Typography>

        <Typography
          variant="body2"
          className="font-normal text-gray-500 lg:w-5/12"
        >
          Discover our curated selection of top-rated beauty products,
          designed to enhance your natural glow and boost your confidence.
        </Typography>
      </div>
    </div>
  );
}
