import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero max-container padding-container flex flex-col 
      gap-20 py-20 pb-32 md:gap-28 lg:py-40 xl:flex-row relative"
    >
      <div className="flex flex-col items-center justify-center text-center text-white w-full h-full absolute top-0 left-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">"The Man From U.N.C.L.E."</h1>
        <p className="text-lg md:text-2xl max-w-lg">United Network Command for Law and Enforcement.</p>
      </div>
    </section>
  );
};

export default Hero;
