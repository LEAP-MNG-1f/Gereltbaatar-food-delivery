"use client";

import { useEffect } from "react";
import HomePage from "../components/pages/HomePage";

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
    </main>
  );
}
