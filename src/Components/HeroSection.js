import React from "react";
import Poster from "../assets/Black Minimalist Website Mockup Instagram Post.png";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="flex-row md:flex px-8">
      <div className="">
        <img
          className=" max-h-screen mt-4 mb-4 md:max-w-3xl
        "
          src={Poster}
          alt="Poster"
        />
      </div>
      <div className="mt-2 lg:ml-4">
        <h1 className="lg:text-4xl font-bold">
          Welcome to our one stop solution for every Business owners!
        </h1>
        <p className="mt-3 mb-3 lg:text-lg ">
          Our platform empowers small businesses and homegrown brands to easily
          create their own websites using a simple drag-and-drop feature—no
          coding required. This gives vendors full control over their online
          presence while also being part of a community-driven marketplace where
          customers can discover and shop from a variety of unique brands. We
          combine the best of both worlds: the freedom to build a distinct brand
          identity with the reach of a larger marketplace.
        </p>
        <p className="mt-3 mb-3 lg:text-lg ">
          Create your own custom website effortlessly using our drag-and-drop
          feature! No coding skills required—design and host your brand's
          website with ease, all through our platform. Click here to get
          started!
        </p>
        <button className="btn font-bold py-2 px-4 rounded mb-3">
          <Link to="/page1">Click Here!</Link>
        </button>
        <p className="mt-3 mb-3 lg:text-lg">
          Ready to become a seller and join our community-driven marketplace?
          Click here to get started!
        </p>
        <button className="btn font-bold py-2 px-4 rounded mb-3">Click Here!</button>
      </div>
    </div>
  );
};

export default HeroSection;
