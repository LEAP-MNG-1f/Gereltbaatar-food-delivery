"use client";

import { Footer } from "../feature/parts/Footer";
import { Header } from "../feature/parts/Header";
import { GreenZone } from "../feature/zones/GreenZone";
import { HomeProductZone } from "../feature/zones/HomeProductZone";
import { FoodNewsCard } from "../ui/cards/FoodNewsCard";

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
