import React from "react";
import { Layout } from "../components/Layout";
import Hero from "../components/Hero";
import MostRecent from "../components/MostRecent";
import RetroReviewCards from "../components/RetroReviewCards";
import Header from "../components/Header";
import RecentReviewsList from "../components/RecentReviewsList";


const navigationHome = [
  { name: "Home", href: "/", current: true },
  { name: "Reviews", href: "/reviews", current: false },
  { name: "Articles", href: "/articles", current: false },
  { name: "Community", href: "/community", current: false },
  { name: "About", href: "/about", current: false },
];

function Home() {
  return (
    <div className="App">
      <Layout>
        <Header navigation={navigationHome} />
        <Hero />
        <MostRecent />
        <RetroReviewCards header="Retro Reviews"/>
      </Layout>
    </div>
  );
};

export default Home;
