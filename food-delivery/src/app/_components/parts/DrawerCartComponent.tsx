import { CloseIcon } from "../svg/CloseIcon";

export const DrawerCartComponent = () => {
  return (
    <div className="border border-[#D6D8DB] border-x-0">
      <div className="py-6">
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="max-w">zurag</div>
          <div className="">
            <div className="flex">
              <div className="">
                <p className="">Main Pizza </p>
                <p className="">34,800₮</p>
              </div>
              <CloseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
