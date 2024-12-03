"use client";

import { CategoryZone } from "../feature/zones/CategoryZone";
import { MenuProductZone } from "../feature/zones/MenuProductZone";
import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { foodData } from "../data/DataType";

const MenuPage = () => {
  const [foodDatas, setFoodDatas] = useState<foodData[]>([]);
  const [categoryDatas, setCategoryDatas] = useState([]);
  const [categoryValue, setCategoryValue] = useState(
    "6746a10d121cbc7de5bb74b4"
  );

  const BACKEND_END_POINT = process.env.BACKEND_URL;

  const fetchFoodsData = async () => {
    try {
      const response = await fetch(`${BACKEND_END_POINT}/foods`);
      const foodDatas = await response.json();
      setFoodDatas(foodDatas.data);
    } catch (error) {
      console.log("Food data fetch error:", error);
    }
  };

  const fetchCategorysData = async () => {
    try {
      const response = await fetch(`${BACKEND_END_POINT}/categorys`);
      const categoryDatas = await response.json();
      setCategoryDatas(categoryDatas.data);
    } catch (error) {
      console.log("Category data fetch error:", error);
    }
  };

  useEffect(() => {
    fetchFoodsData();
    fetchCategorysData();
  }, []);

  const filteredData = foodDatas.filter(
    (foodData) => foodData.categoryId?._id == categoryValue
  );

  return (
    <main>
      <MainLayout>
        <CategoryZone
          categoryDatas={categoryDatas}
          setCategoryValue={setCategoryValue}
          categoryValue={categoryValue}
        />

        <MenuProductZone products={filteredData} />
      </MainLayout>
    </main>
  );
};

export default MenuPage;
