import { FoodNewsCard } from "../parts/FoodNewsCard";
import { GreenZone } from "../parts/GreenZone";
import { Header } from "../parts/Header";

const HomePage = () => {
  return (
    <main className="">
      <Header />
      <GreenZone />
      <FoodNewsCard />
    </main>
  );
};

export default HomePage;
