"use client";

import Link from "next/link";
import { PineconeLogo } from "../../ui/svg/PineconeLogo";
import { ProfileIcon } from "../../ui/svg/ProfileIcon";
import { CartDrawer } from "./CartDrawer";
import { HeaderButton } from "../../ui/buttons/HeaderButton";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

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
                  <HeaderButton
                    text="ХҮРГЭЛТИЙН БҮС"
                    pathname={pathname}
                    path="deliveryZone"
                  />
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
