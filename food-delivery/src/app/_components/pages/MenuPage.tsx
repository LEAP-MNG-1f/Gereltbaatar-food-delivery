"use client";

import { Footer } from "../feature/parts/Footer";
import { Header } from "../feature/parts/Header";
import { CategoryZone } from "../feature/zones/CategoryZone";
import { MenuProductZone } from "../feature/zones/MenuProductZone";
import { useEffect, useState } from "react";

const MenuPage = () => {
  const [foodData, setFoodData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/foods");
      const responsedata = await response.json();
      const data = responsedata.data;
      setFoodData(data);
    } catch (error) {
      console.log("Fetch error:", error);
    }
  };

  console.log("MongoDB data:", foodData);

  foodData: [] = [];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Header />
      <CategoryZone />
      <MenuProductZone products={foodData} />
      <Footer />
    </main>
  );
};

export default MenuPage;
