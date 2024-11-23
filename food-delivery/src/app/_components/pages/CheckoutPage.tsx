import { Footer } from "../feature/parts/Footer";
import { Header } from "../feature/parts/Header";
import { CheckoutContentZone } from "../feature/zones/CheckoutContentZone";

const CheckoutPage = () => {
  return (
    <main>
      <Header />
      <CheckoutContentZone />
      <Footer />
    </main>
  );
};

export default CheckoutPage;
