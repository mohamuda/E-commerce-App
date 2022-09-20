import React from "react";
import Landing from "../components/Landing";
import Highlights from "../components/highlights";
import Features from "../components/featured";
import CheapestBooks from "../components/CheapestBooks";
import Explore from "../components/explore";

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Features />
        <CheapestBooks />
        <Explore />
      </main>
    </>
  );
};

export default Home;
