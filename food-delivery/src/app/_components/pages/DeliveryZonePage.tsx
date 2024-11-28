import { Loading } from "../feature/parts/Loading";
import { DeliveryContentZone } from "../feature/zones/DeliveryContentZone";
import MainLayout from "../layout/MainLayout";

const DeliveryZonePage = () => {
  return (
    <main>
      <MainLayout>
        {/* <DeliveryContentZone /> */}
        <Loading />
      </MainLayout>
    </main>
  );
};

export default DeliveryZonePage;
