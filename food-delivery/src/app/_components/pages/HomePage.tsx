"use client";

import { FoodNewsCard } from "../feature/parts/FoodNewsCard";
import { Footer } from "../feature/parts/Footer";
import { Header } from "../feature/parts/Header";
import { GreenZone } from "../feature/zones/GreenZone";
import { HomeProductZone } from "../feature/zones/HomeProductZone";

const HomePage = () => {
  return (
    <main className="">
      <Header />
      <GreenZone />
      <FoodNewsCard />
      <HomeProductZone />
      <Footer />
    </main>
  );
};

export default HomePage;
