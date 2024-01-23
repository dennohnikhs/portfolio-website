import Header from "@/components/Header";
import Hero from "@/components/Hero";
import React from "react";

type Props = {};

function Home({}: Props) {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen  overflow-scroll z-0">
      <header>
        <Header />
      </header>
      <section className="snap-center">
        <Hero />
      </section>
    </div>
  );
}

export default Home;
