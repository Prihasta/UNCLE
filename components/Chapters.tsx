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
      className={`relative w-full h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh] xl:h-[70vh] min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] xl:min-w-[700px] rounded-2xl cursor-pointer ${backgroundImage} bg-cover bg-center transition-transform duration-300 hover:scale-105 hover:shadow-lg`}
      onClick={handleCardClick} // Attach click event to the parent container
    >
      {isPlaying ? (
        <video
          controls
          autoPlay
          onEnded={handleVideoEnd}
          className="absolute top-0 left-0 w-full h-full rounded-2xl z-20" // Ensure proper z-index for video
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-start justify-between p-6 md:p-10 bg-black/60 rounded-2xl transition-colors duration-300 hover:bg-black/80">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-blue-200 p-4">
              <Image src="/folded-map.svg" alt="map" width={25} height={25} />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-lg md:text-xl font-bold text-white">{title}</h4>
              <p className="text-sm md:text-base text-white">{subtitle}</p>
            </div>
          </div>
          <p className="text-base md:text-lg font-bold text-white">{peopleJoined}</p>
        </div>
      )}
    </div>
  );
};

const Camp = () => {
  return (
    <section className="w-full bg-stone-950 py-10 lg:py-20">
      <div className="relative flex items-start gap-8 overflow-x-auto px-6 lg:px-10 hide-scrollbar">
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
      </div>
      <p className="italic text-gray-400 text-xs sm:text-sm md:text-base px-6 lg:px-10 mt-6 md:mt-8 lg:mt-10 text-center">
        Source: Video downloaded from YouTube for educational purposes only.
      </p>
    </section>
  );
};

export default Camp;
