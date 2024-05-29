import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Trending from "./components/Trending";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Trending />
      <Footer />
    </div>
  );
}

export default App;
