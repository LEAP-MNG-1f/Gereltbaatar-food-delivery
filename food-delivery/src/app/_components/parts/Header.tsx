"use client";

import Link from "next/link";
import * as React from "react";
import { PineconeLogo } from "../svg/PineconeLogo";
import { ProfileIcon } from "../svg/ProfileIcon";
import { CartDrawer } from "./CartDrawer";

export const Header = () => {
  return (
    <header>
      <div className="bg-white w-full fixed z-50">
        <div className="container m-auto">
          <div className="flex justify-between py-2 px-6">
            <div className="flex gap-6">
              <PineconeLogo />
              <div className="flex gap-2 items-center">
                <button>
                  <Link href="/">
                    <p className="px-4 py-2 font-bold text-sm leading-4 tracking-[-0.2px]">
                      НҮҮР
                    </p>
                  </Link>
                </button>
                <button>
                  <Link href="/menu">
                    <p className="px-4 py-2 font-bold text-sm leading-4 tracking-[-0.2px]">
                      ХООЛНЫ ЦЭС
                    </p>
                  </Link>
                </button>
                <button>
                  <p className="px-4 py-2 font-bold text-sm leading-4 tracking-[-0.2px]">
                    ХҮРГЭЛТИЙН БҮС
                  </p>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <CartDrawer />
              </div>

              <div className="flex items-center gap-2 px-4 py-2">
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
