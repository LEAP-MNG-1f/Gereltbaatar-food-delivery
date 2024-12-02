"use client";

import { useEffect, useState } from "react";
import { AdminPageZone } from "../feature/zones/AdminPageZone";
import AdminLayout from "../layout/AdminLayout";
import { categoryDatas } from "../data/DataType";

const AdminPage = () => {
  const [categoryDatas, setcategoryDatas] = useState<categoryDatas[]>([]);

  const BACKEND_END_POINT = process.env.BACKEND_URL;

  const fetchData = async () => {
    try {
      const response = await fetch(`${BACKEND_END_POINT}/api/categorys`);
      const responsedata = await response.json();
      const data = responsedata.data;
      setcategoryDatas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="h-screen bg-[#F7F7F8]">
      <AdminLayout>
        <AdminPageZone categoryDatas={categoryDatas} />
      </AdminLayout>
    </main>
  );
};

export default AdminPage;
