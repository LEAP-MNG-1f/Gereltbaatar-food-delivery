"use client";

import { GreenZone } from "../feature/zones/GreenZone";
import { HomeProductZone } from "../feature/zones/HomeProductZone";
import MainLayout from "../layout/MainLayout";
// import MainLayout from "../layout/MainLayout";
import { FoodNewsCard } from "../ui/cards/FoodNewsCard";

const HomePage = () => {
  return (
    <main className="">
      <MainLayout>
        <GreenZone />
        <FoodNewsCard />
        <HomeProductZone />
      </MainLayout>
    </main>
  );
};

export default HomePage;
