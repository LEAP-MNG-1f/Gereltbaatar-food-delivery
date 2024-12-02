"use client";

import { GreenZone } from "../feature/zones/GreenZone";
import { HomeProductZone } from "../feature/zones/HomeProductZone";
import MainLayout from "../layout/MainLayout";
import { FoodNewsCard } from "../ui/cards/FoodNewsCard";
import { useEffect, useState } from "react";
import { foodData } from "../data/DataType.js";

const HomePage = () => {
  const [foodDatas, setfoodDatas] = useState<foodData[]>([]);

  const BACKEND_END_POINT = process.env.BACKEND_URL;

  const fetchData = async () => {
    try {
      const response = await fetch(`${BACKEND_END_POINT}/api/foods`);
      const responsedata = await response.json();
      const data = responsedata.data;
      setfoodDatas(data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <MainLayout>
        <GreenZone />
        <FoodNewsCard />
        <HomeProductZone foodData={foodDatas} />
      </MainLayout>
    </main>
  );
};

export default HomePage;
