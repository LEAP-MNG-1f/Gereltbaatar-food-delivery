import { AddGrayIcon } from "../svg/AddGrayIcon";

export const AdminCreateCategory = () => {
  return (
    <div
      className={`group border border-[#D6D8DB] hover:border-BrandGreen duration-300 py-2 px-4 rounded-lg flex gap-2 items-center `}
    >
      <AddGrayIcon />
      <p className="font-Inter font-[500] not-italic text-lg text-[#5E6166] tracking-[-0.396px]">
        Create category
      </p>
    </div>
  );
};
