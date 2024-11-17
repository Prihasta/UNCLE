import React from 'react';
import './styles.css';


const Page = () => {
  return (
    <div>
      {/* First section - Image on the left, description on the right */}
      <section className="bg-stone-950 text-white items-center flex p-5">
        <div className="image-container">
          <img
            src="solo-1.jpg"
            alt="Napoleon Solo"
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.header}>Napoleon Solo</h2>
          <p>
            Henry Cavill plays Napoleon Solo in *The Man from U.N.C.L.E.* Solo is a cunning and sharp American CIA agent.
            He is clean-cut, logistical, and likes to play by his own rules. However, throughout the movie, he learns how to do the unexpected to win.
          </p>
        </div>
      </section>

      {/* Second section - Image on the right, description on the left */}
      <section className="bg-stone-950 text-white items-center flex p-5">
        <div style={styles.textContainer}>
          <h2 style={styles.header}>Illya Kuryakin</h2>
          <p>
            Armie Hammer plays Illya Kuryakin in *The Man from U.N.C.L.E.* Kuryakin is a Russian spy who is a man of very few words.
            Like Solo, he also enjoys attacking missions in his unique way. Yet, he can't help but let down his walls for both Solo and Gaby Teller.
          </p>
        </div>
        <div className="image-container">
          <img
            src="ilya-1.jpg"
            alt="Ilya Kuryakin"
          />
        </div>
      </section>

      {/* Third section - Image on the left, description on the right */}
      <section className="bg-stone-950 text-white items-center flex p-5">
        <div className="image-container">
          <img
            src="gaby-1.jpg"
            alt="Gaby Teller"
          />
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.header}>Gaby Teller</h2>
          <p>
            Alicia Vikander plays Gaby Teller in The Man from U.N.C.L.E. Gaby is an intelligent, stubborn, and opinionated young woman. 
            She has a soft spot for her father, yet won't hesitate to fight against anyone who gets in the way of what she wants. Despite her sweet appearance, Gaby proves to her peers that she will not be overlooked or underestimated.
          </p>
        </div>
      </section>

      {/* Fourth section - Image on the right, description on the left */}
      <section className="bg-stone-950 text-white items-center flex p-5">
        <div style={styles.textContainer}>
          <h2 style={styles.header}>Victoria Vinciguerra</h2>
          <p>
            Elizabeth Debicki plays Victoria Vinciguerra in The Man from U.N.C.L.E. Though she and her husband are the villains of the spy thriller, Victoria is the head of their evil operation. 
            She manages to outwit and outplay Solo and Kuryakin. However, her scheming doesn't always turn out for the best.
          </p>
        </div>
        <div className="image-container">
          <img
            src="victoria-1.jpg"
            alt="Victoria Vinciguerra"
          />
        </div>
      </section>

      {/* Label for Other Supporting Roles */}
      <section style={styles.labelSection} className="bg-stone-950">
        <p className=" text-gray-600 italic text-sm">Other Supporting Roles</p>
      </section>

      {/* Last section - Text on the left and right, no image */}
      <section className="bg-stone-950 text-white flex">
        <div style={styles.textContainer}>
          <h2 style={styles.header}>Uncle Rudi</h2>
          <p>
          Sylvester Groth 
          </p>
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.header}>Udo Teller</h2>
          <p>
          Christian Berkel
          </p>
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.header}>Alexander Vinciguerra</h2>
          <p>
          Luca Calvani
          </p>
        </div>
      </section>

      <section className="bg-stone-950 text-white flex overflow-hidden">
        <div style={styles.textContainer}>
          <h2 style={styles.header}>Oleg</h2>
          <p>
          Misha Kuznetsov
          </p>
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.header}>Adrian Sanders</h2>
          <p>
          Jared Harris
          </p>
        </div>
        <div style={styles.textContainer}>
          <h2 style={styles.header}>Alexander Waverly</h2>
          <p>
          Hugh Grant 
          </p>
        </div>
      </section>


      {/* Label for Other Supporting Roles */}
      <section style={styles.labelSection} className="bg-stone-950 overflow-hidden">
        <p className=" text-gray-600 italic text-sm">source: https://screenrant.com/the-man-from-uncle-cast-characters/</p>
      </section>
    </div>
  );
};

const styles = {
  imageContainer: {
    flex: '1',
    padding: '10px',
  },
  textContainer: {
    flex: '1',
    padding: '10px',
  },
  header: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: '1.5rem',
  },
    labelSection: {
    padding: '10px 20px',
    textAlign: 'left',
  },
  labelText: {
    color: 'gray',
    fontSize: '1rem',
    fontStyle: 'italic',
  },
};



export default Page;
