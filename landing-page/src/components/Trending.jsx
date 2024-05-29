import React, { useState } from "react";

const Trending = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const trendingShows = [
    { title: "Game of Thrones" },
    { title: "Stranger Things" },
    { title: "The Witcher" },
    { title: "Money Heist" },

    // Add more shows here
  ];

  const filteredShows = trendingShows.filter((show) =>
    show.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="trending" className="trending-section">
      <h2>Trending Now</h2>
      <input
        type="text"
        placeholder="Search for a show..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="trending-grid">
        {filteredShows.map((show) => (
          <div key={show.title} className="trending-item">
            <h3>{show.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
