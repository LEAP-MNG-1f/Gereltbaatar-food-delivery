import { Footer } from "../parts/Footer";
import { Header } from "../parts/Header";
import { CategoryZone } from "../zones/CategoryZone";
import { MenuProductZone } from "../zones/MenuProductZone";
import { FoodProductCardPropsArray } from "../parts/FoodProductCard";

const ProductArray: FoodProductCardPropsArray[] = [
  {
    _id: "1",
    name: "Margherita Pizza",
    price: 12.99,
    image: "https://example.com/images/margherita_pizza.jpg",
  },
  {
    _id: "2",
    name: "Spaghetti Carbonara",
    price: 15.5,
    image: "https://example.com/images/spaghetti_carbonara.jpg",
  },
  {
    _id: "3",
    name: "Chicken Caesar Salad",
    price: 10.99,
    image: "https://example.com/images/chicken_caesar_salad.jpg",
  },
  {
    _id: "4",
    name: "Beef Burger",
    price: 8.99,
    image: "https://example.com/images/beef_burger.jpg",
  },
  {
    _id: "5",
    name: "Vegetable Stir Fry",
    price: 9.5,
    image: "https://example.com/images/vegetable_stir_fry.jpg",
  },
  {
    _id: "6",
    name: "Grilled Salmon",
    price: 18.0,
    image: "https://example.com/images/grilled_salmon.jpg",
  },
  {
    _id: "7",
    name: "Marinated Tofu Bowl",
    price: 11.5,
    image: "https://example.com/images/marinated_tofu_bowl.jpg",
  },
  {
    _id: "8",
    name: "Vegetable Samosa",
    price: 4.99,
    image: "https://example.com/images/vegetable_samosa.jpg",
  },
  {
    _id: "9",
    name: "Chicken Tikka Masala",
    price: 13.99,
    image: "https://example.com/images/chicken_tikka_masala.jpg",
  },
  {
    _id: "10",
    name: "Pav Bhaji",
    price: 7.5,
    image: "https://example.com/images/pav_bhaji.jpg",
  },
  {
    _id: "11",
    name: "Cheese Quesadilla",
    price: 6.99,
    image: "https://example.com/images/cheese_quesadilla.jpg",
  },
  {
    _id: "12",
    name: "Lamb Shawarma",
    price: 14.5,
    image: "https://example.com/images/lamb_shawarma.jpg",
  },
  {
    _id: "13",
    name: "Cauliflower Rice Bowl",
    price: 8.0,
    image: "https://example.com/images/cauliflower_rice_bowl.jpg",
  },
  {
    _id: "14",
    name: "Beef Taco",
    price: 5.99,
    image: "https://example.com/images/beef_taco.jpg",
  },
  {
    _id: "15",
    name: "Shrimp Scampi",
    price: 16.0,
    image: "https://example.com/images/shrimp_scampi.jpg",
  },
  {
    _id: "16",
    name: "Falafel Wrap",
    price: 7.0,
    image: "https://example.com/images/falafel_wrap.jpg",
  },
  {
    _id: "17",
    name: "Poke Bowl",
    price: 13.0,
    image: "https://example.com/images/poke_bowl.jpg",
  },
  {
    _id: "18",
    name: "Chicken Fried Rice",
    price: 9.99,
    image: "https://example.com/images/chicken_fried_rice.jpg",
  },
  {
    _id: "19",
    name: "Tom Yum Soup",
    price: 7.5,
    image: "https://example.com/images/tom_yum_soup.jpg",
  },
  {
    _id: "20",
    name: "Vegetarian Burrito",
    price: 8.5,
    image: "https://example.com/images/vegetarian_burrito.jpg",
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
