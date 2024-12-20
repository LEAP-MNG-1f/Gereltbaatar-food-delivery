"use client";

import { GreenZone } from "../feature/zones/GreenZone";
import { HomeProductZone } from "../feature/zones/HomeProductZone";
import MainLayout from "../layout/MainLayout";
import { FoodNewsCard } from "../ui/cards/FoodNewsCard";
import { useEffect, useState } from "react";
import { foodData } from "../data/DataType.js";

const HomePage = () => {
  const [foodDatas, setfoodDatas] = useState<foodData[]>([]);
  const [quantity, setQuantity] = useState(1);

  const BACKEND_END_POINT = process.env.BACKEND_URL;

  const fetchData = async () => {
    try {
      const response = await fetch(`${BACKEND_END_POINT}/foods`);
      const datas = await response.json();
      setfoodDatas(datas.data);
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
        <HomeProductZone
          setQuantity={setQuantity}
          quantity={quantity}
          foodData={foodDatas}
        />
      </MainLayout>
    </main>
  );
};

export default HomePage;
