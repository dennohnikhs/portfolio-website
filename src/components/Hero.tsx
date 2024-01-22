"use client";

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
type Props = {};

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["FrontEnd Developer", "Backend Developer", "Wordpress Designer"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center">
      <BackgroundCircles />
      <img
        className="relative rounded-full w-32 h-32 mx-auto object-cover"
        src="/img/profile.png"
        alt="profile picture"
      />
      <div>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semi scroll-px-10">{text}</h1>
        <Cursor cursorColor="#F7ABOA" />
      </div>
    </div>
  );
}

export default Hero;
