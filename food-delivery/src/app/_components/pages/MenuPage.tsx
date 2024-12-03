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
