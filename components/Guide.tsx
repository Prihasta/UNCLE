import React from 'react';
import guideImage from '/vice-nobg.png';

const Guide = () => {
  const styles = {
    container: {
      padding: '30px',
      width: '100%',
      margin: '0 auto',
      backgroundImage: 'linear-gradient(135deg, #0C0A09, #0C0A09)',
      overflow: 'hidden',
      textAlign: 'center',
    },
    header: {
      marginTop: '50px',
      fontSize: '2rem',
      color: '#fff',
      marginBottom: '10px',
    },
    paragraph: {
      fontSize: '1rem',
      color: '#fff',
      lineHeight: '1.6',
      fontFamily: `'Courier New', monospace`,
      margin: '0 auto',
      maxWidth: '800px',
    },
    // Media query for smaller screens
    '@media (max-width: 768px)': {
      header: {
        fontSize: '1.5rem',
      },
      paragraph: {
        fontSize: '0.875rem',
      },
    },
    // Media query for very small screens
    '@media (max-width: 480px)': {
      header: {
        fontSize: '1.2rem',
      },
      paragraph: {
        fontSize: '0.75rem',
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>The Man From U.N.C.L.E.</h1>
      <p style={styles.paragraph}>
        <strong>*The Man from U.N.C.L.E.*</strong> (2015) is a stylish, action-comedy directed by Guy Ritchie. Set during the Cold War, it follows CIA agent Napoleon Solo (Henry Cavill) and KGB agent Illya Kuryakin (Armie Hammer) as they team up to stop a criminal organization from using nuclear weapons. With sleek visuals, witty banter, and fast-paced action, the film brings retro espionage to life with a modern twist.
      </p>
    </div>
  );
};

export default Guide;
