"use client";

import { Footer } from "../feature/parts/Footer";
import { Header } from "../feature/parts/Header";
import { realData } from "../ui/cards/FoodProductCard";
import { CategoryZone } from "../feature/zones/CategoryZone";
import { MenuProductZone } from "../feature/zones/MenuProductZone";
import { useEffect } from "react";

const ProductArray: realData[] = [
  {
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505",
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    name: "American Recipes",
    price: 9000,
  },
];

const MenuPage = () => {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:4000/food-information");
      const responsedata = await response.json();
      const realData = responsedata.data;
      console.log("MongoDB data:", realData);
    } catch (error) {
      console.log("Fetch error:", error);
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
