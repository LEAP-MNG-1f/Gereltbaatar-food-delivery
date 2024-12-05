import { DashboardCard } from "../ui/cards/DashboardCard";

const DashboardPage = () => {
  return (
    <main>
      <div className="h-screen w-full bg-[#F7F7F8]">
        <div className="container m-auto pt-[86px] w-full flex justify-center items-center">
          <div className="max-w-[1024px] w-full">
            <div className="w-full">
              <div className="py-5 px-6 bg-white border border-[#ECEDF0] rounded-t-xl">
                <p className="text-[#121316] font-Inter text-[20px] font-bold leading-[28px] tracking-[-0.5px]">
                  Admin dashboard
                </p>
              </div>
              <div className="flex justify-between border border-[#ECEDF0]">
                <div className="px-6 py-3 flex items-center">
                  <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[182px]">
                    Order name
                  </p>
                </div>
                <div className="px-6 py-3 flex items-center">
                  <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[92px]">
                    Buyer info
                  </p>
                </div>
                <div className="px-6 py-3 flex items-center">
                  <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[182px]">
                    Payment
                  </p>
                </div>
                <div className="px-6 py-3 flex items-center">
                  <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[182px]">
                    Address
                  </p>
                </div>
                <div className="px-6 py-3 flex items-center">
                  <p className="text-[#3F4145] font-Inter text-xs font-semibold leading-[16px] tracking-[-0.12px] w-[80px] ">
                    Delivery state
                  </p>
                </div>
                <div className="px-6 py-3 flex items-center">
                  <div className="w-5 h-5"></div>
                </div>
              </div>
              <div className="h-[548px] w-full bg-white border border-[#ECEDF0] rounded-b-xl">
                <DashboardCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
