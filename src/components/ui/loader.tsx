"use client";

import { Spinner, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Typography variant="h2" color="indigo" className="mb-4">
        Welcome to Our School
      </Typography>
      <Spinner className="h-16 w-16 text-indigo-600" />
      <Typography variant="paragraph" color="gray" className="mt-4">
        Preparing your experience...
      </Typography>
    </motion.div>
  );
}
