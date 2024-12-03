"use client";

import { CategoryZone } from "../feature/zones/CategoryZone";
import { MenuProductZone } from "../feature/zones/MenuProductZone";
import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";

const MenuPage = () => {
  const [foodDatas, setfoodDatas] = useState([]);
  const [categoryValue, setCategoryValue] = useState("Breakfast");

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <MainLayout>
        <CategoryZone
          setCategoryValue={setCategoryValue}
          categoryValue={categoryValue}
        />
        <MenuProductZone products={foodDatas} />
      </MainLayout>
    </main>
  );
};

export default MenuPage;
