import { FoodNewsCard } from "../parts/FoodNewsCard";
import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { GreenZone } from "../zones/GreenZone";
import { HomeProductZone } from "../zones/HomeProductZone";

const HomePage = () => {
  return (
    <main className="">
      <Header />
      <GreenZone />
      <FoodNewsCard />
      <HomeProductZone />
      <Footer />
    </main>
  );
};

export default HomePage;
