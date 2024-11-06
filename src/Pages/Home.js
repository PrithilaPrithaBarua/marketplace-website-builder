import React from "react";
import Footer from "../Components/Footer";
import Card from "../Components/Card";
import Business from "../Components/Business";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <div>
      <div className="nav-bar px-8">
        <Navbar />
        <HeroSection />
        <Card />
        <Business />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
