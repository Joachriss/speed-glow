"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AppLoader() {
    return (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white dark:bg-black">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4"
            >
                {/* Logo */}
                <motion.div
                    // animate={{ scale: [1, 1.1, 1] }}
                    // transition={{ repeat: Infinity, duration: 1.2 }}
                >
                    <Image
                        src="/images/logo/logoWhite.png"   // 👈 your logo
                        alt="Site Logo"
                        width={150}
                        height={150}
                        priority
                    />
                </motion.div>

                <div className="mx-auto w-full flex items-center justify-center">
                    <div className="loaderq"></div>
                </div>
                {/* <p className="text-sm text-gray-500 dark:text-gray-400">
                    Loading...
                </p> */}

            </motion.div>
        </div>
    );
}
