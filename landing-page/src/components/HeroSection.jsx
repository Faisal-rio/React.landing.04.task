import React from "react";

const HeroSection = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h2>Game of Thrones</h2>
        <p>
          Game of Thrones is an American fantasy drama television series created
          by David Benioff and D. B. Weiss for HBO.
        </p>
        <p>
          It is an adaptation of A Song of Ice and Fire, a series of fantasy
          novels by George R. R. Martin
        </p>
        <p>
          the first of which is A Game of Thrones. The show premiered on HBO in
          the United
        </p>

        <div className="button-group">
          <button className="hero-button play-button">Play</button>
          <button className="hero-button info-button">More info</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
