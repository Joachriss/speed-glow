"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import X from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { motion } from "motion/react";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About us", href: "#" },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-16 bg-[#191919] px-8 pt-12 text-white">
      <div className="container mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-wrap justify-center gap-10 md:justify-between">
          {/* BRAND */}
          <Box className="max-w-md text-center md:text-left">
            <div className="w-full">
              <img
                src="/images/logo/logoWhite.png"
                alt="Speed Glow"
                className="mx-auto sm:mx-0"
                width={120}
                height={120}
              />
            </div>
            {/* <Typography
              variant="h5"
              className="mb-4 font-bold text-white"
            >
              Speed Glow
            </Typography> */}

            <Typography
              variant="body2"
              className="mb-6 text-gray-400"
            >
              Speed Glow helps you discover and shop premium beauty products
              that enhance your natural glow — fast, easy, and reliable.
            </Typography>

            <ul className="flex flex-wrap justify-center gap-4 md:justify-start">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-red-500 hover:text-red-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Box>

          {/* APP LINKS */}
          <Box className="text-center md:text-left">
            <Typography
              variant="h6"
              className="mb-3 font-semibold text-white"
            >
              Explore Our Products
            </Typography>

            <div className="flex flex-col gap-2">
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
          </Box>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            variant="body2"
            className="text-center text-gray-400"
          >
            © {CURRENT_YEAR} Speed Glow. All rights reserved.
          </Typography>

          <div className="flex gap-2">
            <IconButton className="text-gray-400 hover:text-white">
              <X color="error" />
            </IconButton>
            <IconButton className="text-gray-400 hover:text-white">
              <FacebookIcon color="error" />
            </IconButton>
            <IconButton className="text-gray-400 hover:text-white">
              <InstagramIcon color="error" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
