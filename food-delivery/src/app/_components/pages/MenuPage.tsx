import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { CategoryZone } from "../zones/CategoryZone";
import { MenuProductZone } from "../zones/MenuProductZone";
import { FoodProductCardPropsArray } from "../parts/FoodProductCard";

const ProductArray: FoodProductCardPropsArray[] = [
  {
    _id: "1",
    name: "Өглөөний хоол",
    image: "./FoodImg.png",
    ingredient: "talh",
    price: 1000,
  },
  {
    _id: "2",
    name: "бууз",
    image: "./FoodImg.png",
    ingredient: "talh",
    price: 2000,
  },
  {
    _id: "3",
    name: "бууз",
    image: "./FoodImg.png",
    ingredient: "talh",
    price: 2000,
  },
  {
    _id: "4",
    name: "бууз",
    image: "./FoodImg.png",
    ingredient: "talh",
    price: 2000,
  },
  {
    _id: "5",
    name: "бууз",
    image: "./FoodImg.png",
    ingredient: "talh",
    price: 2000,
  },
  {
    _id: "6",
    name: "бууз",
    image: "./FoodImg.png",
    ingredient: "talh",
    price: 2000,
  },
  {
    _id: "7",
    name: "бууз",
    image: "./FoodImg.png",
    ingredient: "talh",
    price: 2000,
  },
  {
    _id: "7",
    name: "бууз",
    image: "./FoodImg.png",
    ingredient: "talh",
    price: 2000,
  },
];

const MenuPage = () => {
  return (
    <main>
      <Header />
      <CategoryZone />
      <MenuProductZone products={ProductArray} />
      <Footer />
    </main>
  );
};

export default MenuPage;
