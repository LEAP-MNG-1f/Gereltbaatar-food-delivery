"use client";

import Link from "next/link";
import { PineconeLogo } from "../../ui/svg/PineconeLogo";
import { ProfileIcon } from "../../ui/svg/ProfileIcon";
import { CartDrawer } from "./CartDrawer";
import { HeaderButton } from "../../ui/buttons/HeaderButton";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { foodData } from "../../data/DataType";
import { drawerId } from "../../data/DataType";

export const Header = () => {
  const pathname = usePathname();
  const [drawerData, setDrawerData] = useState<foodData[]>([]);
  const [drawerId, setDrawerId] = useState<drawerId[]>([]);
  // const [drawerQuantity, setDrawerQuantity] = useState<number[]>([]);

  const BACKEND_END_POINT = process.env.BACKEND_URL;

  const draweDataFetch = async () => {
    try {
      const response = await fetch(`${BACKEND_END_POINT}/foods`);
      const datas = await response.json();
      setDrawerData(datas.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    draweDataFetch();
    const savedIds = JSON.parse(localStorage.getItem("items") || "[]");
    const savedQuantitys = JSON.parse(localStorage.getItem("items") || "[]");
    const ids = savedIds.map((savedId: { _id: string; quantity: number }) => ({
      savedId,
    }));
    const quantites = savedQuantitys.map(
      (savedQuantity: { quantity: number }) => savedQuantity.quantity
    );
    setDrawerId(ids);
    // setDrawerQuantity(quantites);
  }, []);

  // Шинэ объектүүдийг хадгалж байгаа хэсэг
  useEffect(() => {
    draweDataFetch();
    const savedIds = JSON.parse(localStorage.getItem("items") || "[]");
    // `quantity` болон `_id`-г нэгтгэж хадгалах
    const idsAndQuantities = savedIds.map(
      (savedId: { _id: string; quantity: number }) => ({
        _id: savedId._id,
        quantity: savedId.quantity,
      })
    );
    setDrawerId(idsAndQuantities); // setDrawerId-д шинэ өгөгдлийг хадгална
  }, []);

  // filteredData-г зөв шүүх
  const filteredDatas = drawerData.filter((filteredData) => {
    if (filteredData._id !== undefined) {
      return drawerId.some(
        (drawerItem) =>
          drawerItem._id === filteredData._id &&
          filteredData.quantity !== drawerItem.quantity
      );
    }
    return false;
  });
  // console.log(filteredDatas, "filteredDatas");

  // const mapDatas = filteredDatas.map((mapData)=> {
  //   ...mapData,
  // })

  return (
    <header>
      <div className="bg-white w-full fixed z-50">
        <div className="container m-auto">
          <div className="flex justify-between py-2">
            <div className="flex gap-6">
              <PineconeLogo />
              <div className="flex gap-2 items-center">
                <button>
                  <Link href="/">
                    <HeaderButton text="НҮҮР" pathname={pathname} path="/" />
                  </Link>
                </button>
                <button>
                  <Link href="/menu">
                    <HeaderButton
                      text="ХООЛНЫ ЦЭС"
                      pathname={pathname}
                      path="/menu"
                    />
                  </Link>
                </button>
                <button>
                  <Link href={"/delivery-zone"}>
                    <HeaderButton
                      text="ХҮРГЭЛТИЙН БҮС"
                      pathname={pathname}
                      path="/delivery-zone"
                    />
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CartDrawer />
              </div>

              <div className="flex items-center gap-2 pl-4 py-2">
                <ProfileIcon />
                <p className="font-bold text-sm tracking-[-0.3px]">Нэвтрэх</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
