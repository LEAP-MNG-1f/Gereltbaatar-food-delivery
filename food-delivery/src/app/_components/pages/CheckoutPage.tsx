import { CheckoutContentZone } from "../feature/zones/CheckoutContentZone";
import MainLayout from "../layout/MainLayout";

const CheckoutPage = () => {
  return (
    <main>
      <MainLayout>
        <CheckoutContentZone />
      </MainLayout>
    </main>
  );
};

export default CheckoutPage;
