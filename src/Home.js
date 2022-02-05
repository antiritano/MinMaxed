import React from "react";
import { Layout } from "./components/Layout";
import Hero from './components/Hero'
import MostRecent from './components/MostRecent'
import RetroReviewCards from "./components/RetroReviewCards";

function Home() {
  return (
    <div className="App">
      <Layout>
      <Hero />
      <MostRecent />
      <RetroReviewCards />
      </Layout>
    </div>
  );
}

export default Home;
