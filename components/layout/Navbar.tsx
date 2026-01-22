"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import TwitterIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import { ShoppingBagIcon } from "@heroicons/react/16/solid";

interface NavItemProps {
  label: string;
  href?: string;
  target?: string;
}

const navItems: NavItemProps[] = [
  { label: "Home", href: "/", target: "_self" },
  { label: "Products", href: "/products", target: "_self" },
  { label: "About Us", href: "/about", target: "_self" }
];

function NavItem({ label, href,target }: NavItemProps) {
  return (
    <Link
      href={href || "#"}
      target={target === "_blank" ? "_blank" : "_self"}
      className="font-medium"
    >
      {label}
    </Link>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: isScrolling ? "#fff" : "transparent",
          transition: "background-color 0.3s",
        }}
      >
        <Toolbar className="container mx-auto flex justify-between">
          {/* Logo */}
          {/* <Typography
            variant="h6"
            component={Link}
            href="/"
            sx={{
              color: isScrolling ? "grey.900" : "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Speed Glow
          </Typography> */}
          <Link href="/">
            <img
              src={
                isScrolling
                  ? "/images/logo/logoBlack.png"
                  : "/images/logo/logoWhite.png"
              }
              alt="Logo"
              className="w-20"
            />
          </Link>

          {/* Desktop Menu */}
          <Box
            className={`hidden lg:flex gap-6 ${
              isScrolling ? "text-gray-900" : "text-white"
            }`}
          >
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </Box>

          {/* Desktop Actions */}
          <Box className="hidden lg:flex items-center gap-2">
            <IconButton>
              <TwitterIcon color={isScrolling ? "action" : "inherit"} />
            </IconButton>
            <IconButton>
              <FacebookIcon color={isScrolling ? "action" : "inherit"} />
            </IconButton>
            <IconButton>
              <InstagramIcon color={isScrolling ? "action" : "inherit"} />
            </IconButton>
            <Button
              startIcon={<ProductionQuantityLimitsIcon />}
              variant="contained"
              size="small"
              color={"error"}
            >
              Products
            </Button>
          </Box>

          {/* Mobile Toggle */}
          <IconButton
            onClick={() => setOpen(true)}
            className="md:hidden"
            sx={{ color: isScrolling ? "grey.900" : "#fff" }}
          >
            <MenuIcon  />
            
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <Box className="p-6">
          <Box className="flex justify-between items-center mb-4">
            <Typography variant="h6">Speed Glow</Typography>
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <ListItemButton onClick={() => setOpen(false)}>
                  <NavItem {...item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box className="mt-4 flex gap-2">
            <IconButton>
              <TwitterIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <Button variant="contained" color="error" startIcon={<ShoppingBagIcon className="h-5 w-5"/>} size="small" className="ml-auto">
              Products
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
