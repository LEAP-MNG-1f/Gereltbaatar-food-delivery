"use client";

import { GreenZone } from "../feature/zones/GreenZone";
import { HomeProductZone } from "../feature/zones/HomeProductZone";
import MainLayout from "../layout/MainLayout";
import { FoodNewsCard } from "../ui/cards/FoodNewsCard";
import { useEffect, useState } from "react";
import { groupBy } from "lodash";

// type foodDatas = {
//   categoryId: object;
//   name: string;
//   __v: number;
//   _id: "6746a10d121cbc7de5bb74b4";

//   [[Prototype]]: Object;
//   image: "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg";
//   ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ";
//   name: "Mexican Tacos";
//   price: 9500;
//   __v: 0;
//   _id: "6746a1a0929e845194026e8f";
// };

const HomePage = () => {
  const [foodDatas, setfoodDatas] = useState([]);
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

  foodDatas: [] = [];

  useEffect(() => {
    fetchData();
  }, []);

  const groupedData = groupBy(foodDatas, (foods) => foods);

  console.log("group data", groupedData);

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
