"use client";

import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export default function FeatureCard({
  icon: Icon,
  title,
  children,
}: FeatureCardProps) {
  return (
    <Card
      elevation={0}
      className="bg-transparent"
    >
      <CardContent className="grid justify-start p-0">
        {/* Icon */}
        <Box className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-red-700 text-white">
          <Icon className="h-6 w-6" />
        </Box>

        {/* Title */}
        <Typography
          variant="h6"
          className="mb-2 font-semibold text-gray-900"
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          className="text-gray-500 font-normal"
        >
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}
