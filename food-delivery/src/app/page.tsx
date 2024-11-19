"use client";

import { useEffect } from "react";
import HomePage from "./_components/pages/HomePage";
import { CartDrawer } from "./_components/parts/CartDrawer";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://gereltbaatar-food-delivery.onrender.com"
      );
      const data = await response.json();
      console.log("data send shuu", data);
    } catch (error) {
      console.log("error", error);
    } finally {
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <HomePage />
      {/* <CartDrawer /> */}
    </main>
  );
}
