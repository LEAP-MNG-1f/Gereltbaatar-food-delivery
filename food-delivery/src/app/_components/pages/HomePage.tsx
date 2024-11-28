"use client";

import { GreenZone } from "../feature/zones/GreenZone";
import { HomeProductZone } from "../feature/zones/HomeProductZone";
import MainLayout from "../layout/MainLayout";
import { FoodNewsCard } from "../ui/cards/FoodNewsCard";
import { useEffect, useState } from "react";
import { groupBy } from "lodash";
import { Food } from "../data/DataType.js";

const HomePage = () => {
  const [foodDatas, setfoodDatas] = useState<Food[]>([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/foods");
      const responsedata = await response.json();
      const data = responsedata.data;
      setfoodDatas(data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  console.log("MongoDB data homePage:", foodDatas);

  useEffect(() => {
    fetchData();
  }, []);

  const groupedDatas = groupBy(foodDatas, (foods) => foods.categoryId?.name);

  return (
    <main>
      <MainLayout>
        <GreenZone />
        <FoodNewsCard />
        <HomeProductZone />
      </MainLayout>
    </main>
  );
};

export default HomePage;
