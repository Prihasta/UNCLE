import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero w-full h-screen bg-cover bg-center relative flex items-center justify-center">
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">"The Man From U.N.C.L.E."</h1>
        <p className="text-lg md:text-2xl max-w-lg">
          United Network Command for Law and Enforcement.
        </p>
      </div>
    </section>
  );
};

export default Hero;
