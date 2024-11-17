"use client";
import Image from "next/image";
import { useState } from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
  videoUrl: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined, videoUrl }: CampProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleCardClick = () => {
    setIsPlaying(true);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div 
      onClick={handleCardClick} 
      className={`relative w-full h-full rounded-2xl min-w-[550px] xs:h-[45vh] xs:rounded-2xl xs:min-w-[400px] md:min-w-[500px] sm:h-[40vh] md:h-[50vh] md:rounded-2xl lg:min-w-[800px] lg:h-[90vh] ${backgroundImage} text-white bg-cover bg-no-repeat lg:rounded-2xl cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
    >
      {isPlaying ? (
        <video 
          controls 
          autoPlay 
          onEnded={handleVideoEnd} 
          className="w-full h-full rounded-2xl"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 lg:rounded-2xl bg-black/60 transition-colors duration-300 hover:bg-black/80">
          <div className="flexCenter gap-4">
            <div className="rounded-full bg-blue-200 p-4">
              <Image src="/folded-map.svg" alt="map" width={25} height={25} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="bold-18 text-white">{title}</h4>
              <p className="regular-14 text-white">{subtitle}</p>
            </div>
          </div>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
          
        </div>
      )}
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:py-20 bg-stone-950">
      <div className="hide-scrollbar auto-scroll flex h-[300px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px] px-8">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="'It Doesn’t Have To Match.'"
          subtitle="The Man From U.N.C.L.E. (2015)"
          peopleJoined="Movie Clip"
          videoUrl="/videos/video1.mp4"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="'Loving Your Work.'"
          subtitle="The Man From U.N.C.L.E. (2015)"
          peopleJoined="Movie Clip"
          videoUrl="/videos/video2.mp4"
        />
        <CampSite
          backgroundImage="bg-bg-img-3"
          title="'They Were Waiting For Me.'"
          subtitle="The Man From U.N.C.L.E. (2015)"
          peopleJoined="Movie Clip"
          videoUrl="/videos/video3.mp4"
        />
        <CampSite
          backgroundImage="bg-bg-img-4"
          title="'Want To Dance?'"
          subtitle="The Man From U.N.C.L.E. (2015)"
          peopleJoined="Movie Clip"
          videoUrl="/videos/video4.mp4"
        />
        <CampSite
          backgroundImage="bg-bg-img-5"
          title="'Chance'"
          subtitle="The Man From U.N.C.L.E. (2015)"
          peopleJoined="Movie Clip"
          videoUrl="/videos/video5.mp4"
        />
        <p className="italic absolute bottom-4 left-4 text-xs text-gray-300">Source: Video downloaded from YouTube for education purposes only.</p>
        {/* Add more CampSite components as needed */}
      </div>
    </section>
  );
};

export default Camp;
