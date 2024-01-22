"use client";

import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

type Props = {};

function Header({}: Props) {
  return (
    <header className="sticky top-0  p-5 flex items-start justify-between max-w-7xl mx-auto z-200 xl:items-center">
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row justify-items-center"
      >
        <div>
          <SocialIcon
            url="https://twitter.com"
            bgColor="gray"
            fgColor="white"
          />
        </div>
        <div>
          <SocialIcon
            url="https://youtube.com"
            bgColor="gray"
            fgColor="white"
          />
        </div>
        <div>
          <SocialIcon
            url="https://facebook.com"
            bgColor="gray"
            fgColor="white"
          />
        </div>
        <div>
          <SocialIcon
            url="https://linkedin.com"
            bgColor="gray"
            fgColor="white"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          bgColor="gray"
          fgColor="white"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In touch
        </p>
      </motion.div>
    </header>
  );
}

export default Header;
