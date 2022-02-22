import React from "react";
import { Layout } from "../components/Layout";
import Hero from "../components/Hero";
import MostRecent from "../components/MostRecent";
import RetroReviewCards from "../components/RetroReviewCards";
import Header from "../components/Header";

const navigationHome = [
  { name: "Home", href: "/", current: true },
  { name: "Reviews", href: "#", current: false },
  { name: "Articles", href: "#", current: false },
  { name: "Community", href: "/community", current: false },
  { name: "About", href: "/about", current: false },
];

function Home() {
  return (
    <div className="App snap-mandatory">
      <Layout>
        <Header navigation={navigationHome} />
        <Hero />
        <MostRecent />
        <RetroReviewCards />
      </Layout>
    </div>
  );
};

export default Home;
