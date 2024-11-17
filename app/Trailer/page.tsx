"use client";
import React, { useEffect, useState } from 'react';

// Import logos or provide URLs to logos here
const platformLogos = [
  { name: "Apple TV", url: "apple-tv-logo-url.png", link: "https://tv.apple.com/id/movie/the-man-from-uncle/umc.cmc.njbz2bdnkx8jesp3wby932gg" },
  { name: "Google Play", url: "google-play-logo-url.png", link: "https://play.google.com/store/movies/details/The_Man_from_U_N_C_L_E?id=E-OW9FXwLyI" },
  { name: "Prime Video", url: "prime-video-logo-url.png", link: "https://www.amazon.com/Man-U-N-C-L-E-Henry-Cavill/dp/B013WF1Z4O" },
  { name: "Fandango Now", url: "fandango-now-logo-url.png", link: "https://www.fandango.com/" },
  { name: "Microsoft", url: "microsoft-logo-url.png", link: "https://www.microsoft.com/en-us/p/the-man-from-uncle/8d6kgx08mjx4?activetab=pivot%3aoverviewtab" },
  { name: "Fandango At Home", url: "fandango-at-home-logo-url.png", link: "https://www.fandango.com/" },
  { name: "Movies Anywhere", url: "movies-anywhere-logo-url.png", link: "https://moviesanywhere.com/movie/the-man-from-uncle" },
  { name: "YouTube", url: "youtube-logo-url.png", link: "https://www.youtube.com/" }
];

const Page = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{
      background: '#0c0a09',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      minHeight: '130vh',
      position: 'relative',
      paddingTop: '50px'
    }}>
      <h1 style={{
        position: 'absolute',
        top: '20px',
        left: '0px',
        color: '#ffffff',
        fontSize: '24px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '10px 20px',
        borderRadius: '5px',
        zIndex: 1
      }}>
        Watch the trailer now!
      </h1>
      <iframe 
        style={{ marginTop: '70px' }}
        width={isMobile ? "100%" : "960"} 
        height={isMobile ? "300" : "515"} 
        src="https://www.youtube.com/embed/PzOhTL0a440?si=g9WzQ_b6zEWZLrrI" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p style={{
        color: '#ffffff',
        fontSize: isMobile ? '14px' : '16px',
        textAlign: 'left',
        marginTop: '50px',
        maxWidth: '960px',
        padding: isMobile ? '0 20px' : '0'
      }}>
        A Warner Bros. Pictures presentation, a Ritchie/Wigram Production, a Davis Entertainment Production, a Guy Ritchie Film, “The Man from U.N.C.L.E.” will be distributed worldwide by Warner Bros. Pictures, a Warner Bros. Entertainment Company.
      </p>
      
      {/* Watch Now Section */}
      <div style={{
        backgroundColor: '#0c0a09',
        color: '#0c0a09',
        padding: '20px',
        marginTop: '50px',
        width: '100%',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <h2 style={{
          fontSize: isMobile ? '20px' : '24px',
          marginBottom: '20px'
        }}>
          Buy / Rent - Digital
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
          maxWidth: '960px'
        }}>
          {platformLogos.map((platform, index) => (
            <a 
              key={index}
              href={platform.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '160px', // Adjust width as needed
                height: '90px', // Adjust height as needed
                border: '1px solid #ffffff',
                borderRadius: '8px',
                textDecoration: 'none',
                backgroundColor: '#ffffff',
                padding: '10px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0px 4px 15px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <img src={platform.url} alt={platform.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
