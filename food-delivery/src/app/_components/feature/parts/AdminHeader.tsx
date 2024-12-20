"use client";

import Link from "next/link";
import { PineconeLogo } from "../../ui/svg/PineconeLogo";
import { ProfileIcon } from "../../ui/svg/ProfileIcon";
import { HeaderButton } from "../../ui/buttons/HeaderButton";
import { usePathname, useRouter } from "next/navigation";
import { DashboardBadgeButton } from "../../ui/buttons/DashboardBadgeButton";

export const AdminHeader = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLink = () => {
    router.push("/dashboard");
  };

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
                <button>
                  <Link href={"/admin"}>
                    <HeaderButton
                      text="АДМИН"
                      pathname={pathname}
                      path="/admin"
                    />
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href={"/admin/dashboard"}>
                <div className="flex items-center gap-2 pl-4 py-2">
                  <DashboardBadgeButton />
                  <p
                    className={`py-2 font-bold text-sm leading-4 tracking-[-0.2px] ${
                      pathname === "/admin/dashboard"
                        ? "text-BrandGreen "
                        : "text-black"
                    }`}
                  >
                    ХЯНАЛТЫН САМБАР
                  </p>
                </div>
              </Link>

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
