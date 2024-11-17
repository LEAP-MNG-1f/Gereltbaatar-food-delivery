import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { CategoryZone } from "../zones/CategoryZone";
import { MenuProductZone } from "../zones/MenuProductZone";

const MenuPage = () => {
  return (
    <main>
      <Header />
      <CategoryZone />
      <MenuProductZone />
      <Footer />
    </main>
  );
};

export default MenuPage;
