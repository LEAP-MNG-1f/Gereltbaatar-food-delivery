import Link from "next/link";
import { NotFoundLogo } from "../ui/svg/NotFoundLogo";

const NotFoundPage = () => {
  return (
    <main className="h-[800px]">
      <div className="container m-auto h-full w-full pt-[57px]">
        <div className="flex flex-col gap-7 items-center justify-center p-16">
          <NotFoundLogo />
          <div className="flex flex-col gap-1 items-center">
            <p className="text-center text-[#808080] font-sans text-base font-normal leading-normal">
              Хуудас олдсонгүй
            </p>
            <p className="text-center text-[#808080] font-sans text-base font-normal leading-normal">
              Уучлаарай, таны хайж буй хуудас байхгүй байна.
            </p>
          </div>
          <Link href={"/"}>
            <button className="group border border-[#808080] hover:border-BrandGreen px-4 py-2 rounded-xl duration-200">
              <p className="text-center group-hover:text-BrandGreen text-[#808080] font-sans text-base font-normal leading-normal duration-200">
                Нүүр хуудас руу очих
              </p>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
