import { FoodNewsCard } from "../parts/FoodNewsCard";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { GreenZone } from "../zones/GreenZone";
import { ProductZone } from "../zones/ProductZone";

const HomePage = () => {
  return (
    <main>
      <Header />
      <GreenZone />
      <FoodNewsCard />
      <ProductZone />
      <Footer />
    </main>
  );
};

export default HomePage;
