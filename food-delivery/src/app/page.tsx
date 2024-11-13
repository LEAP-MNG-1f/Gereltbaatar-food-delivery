"use client";

import Image from "next/image";
import { useEffect } from "react";

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
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>Gereltbaatar Food Delivery Website</li>
        </ol>
      </main>
    </div>
  );
}
