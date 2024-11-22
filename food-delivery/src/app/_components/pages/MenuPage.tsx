"use client";

import { Footer } from "../feature/parts/Footer";
import { Header } from "../feature/parts/Header";
import { FoodProductCardPropsArray } from "../ui/cards/FoodProductCard";
import { CategoryZone } from "../feature/zones/CategoryZone";
import { MenuProductZone } from "../feature/zones/MenuProductZone";
import { useEffect } from "react";

const ProductArray: FoodProductCardPropsArray[] = [];

const MenuPage = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/food-information");
      const responsedata = await response.json();
      const realData = responsedata.data;
      console.log("MongoDB data:", realData);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <Header />
      <CategoryZone />
      <MenuProductZone products={ProductArray} />
      <Footer />
    </main>
  );
};

export default MenuPage;
