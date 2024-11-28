import { ProductSeleCol } from "../parts/ProductSeleCol";
import { groupBy } from "lodash";

const foodDatas = [
  {
    _id: "6746a1a0929e845194026e8f",
    name: "Mexican Tacos",
    price: 9500,
    image:
      "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
    categoryId: {
      _id: "6746a10d121cbc7de5bb74b4",
      name: "Салад ба зууш",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e5494774",
    name: "American Recipes",
    price: 9000,
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Corndogs-7832ef6.jpg?quality=90&resize=556,505",
    categoryId: {
      _id: "6746a9b54f18ed95b7ac4f60",
      name: "Амттан",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e5494775",
    name: "Korean Food",
    price: 12000,
    image:
      "https://www.thespruceeats.com/thmb/eFzxoZFO-ZWurv42gxrBveHYOf4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-korean-bibimbap-recipe-2118765-step-011-acab906539594dc9a668c7fbb753c43d.jpg",
    categoryId: {
      _id: "6746a9b54f18ed95b7ac4f60",
      name: "Амттан",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e5494776",
    name: "Japanese Cuisine",
    price: 15000,
    image:
      "https://turpoisk.ua/images/blog/japonskaja-kuhnia/japon-kuhnia-1.jpg",
    categoryId: {
      _id: "6746a9b54f18ed95b7ac4f60",
      name: "Амттан",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e5494777",
    name: "Italian Dishes",
    price: 8500,
    image:
      "https://insanelygoodrecipes.com/wp-content/uploads/2020/12/Homemade-Ground-Beef-Lasagna.png",
    categoryId: {
      _id: "6746a9b54f18ed95b7ac4f60",
      name: "Амттан",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e5494778",
    name: "Mexican Tacos",
    price: 9500,
    image:
      "https://s23209.pcdn.co/wp-content/uploads/2019/04/Mexican-Street-TacosIMG_9091.jpg",
    categoryId: {
      _id: "6746a10d121cbc7de5bb74b4",
      name: "Салад ба зууш",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e5494779",
    name: "French Cuisine",
    price: 11000,
    image:
      "https://cooknshare.com/wp-content/uploads/2022/07/ratatouilleweb.jpg",
    categoryId: {
      _id: "6746a10d121cbc7de5bb74b4",
      name: "Салад ба зууш",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e549477a",
    name: "Chinese Dishes",
    price: 13000,
    image:
      "https://media.cnn.com/api/v1/images/stellar/prod/220921081550-05-chinese-foods-mapo-tofu.jpg?c=original",
    categoryId: {
      _id: "6746a10d121cbc7de5bb74b4",
      name: "Салад ба зууш",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e549477b",
    name: "Indian Cuisine",
    price: 14000,
    image:
      "https://cdn.britannica.com/94/240094-050-D5CC461B/Indian-naan-flatbread.jpg",
    categoryId: {
      _id: "6746a10d121cbc7de5bb74b4",
      name: "Салад ба зууш",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e549477c",
    name: "Mediterranean Meals",
    price: 10500,
    image:
      "https://minimalistbaker.com/wp-content/uploads/2016/07/The-Ultimate-Mediterranean-Bowl-SQUARE.jpg",
    categoryId: {
      _id: "6746a9e314414cfa9402b5eb",
      name: "Хямдралтай",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e549477d",
    name: "Thai Food",
    price: 11500,
    image:
      "https://www.indulgebangkok.com/wp-content/uploads/2018/11/356fdc00e7ec5e447c1d322a91f8968a-1080x675.jpg",
    categoryId: {
      _id: "6746a9e314414cfa9402b5eb",
      name: "Хямдралтай",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e549477e",
    name: "Vietnamese Pho",
    price: 12500,
    image:
      "https://www.inspiredtaste.net/wp-content/uploads/2016/06/Vietnamese-Pho-Soup-Recipe-1.jpg",
    categoryId: {
      _id: "6746a9e314414cfa9402b5eb",
      name: "Хямдралтай",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e549477f",
    name: "Greek Dishes",
    price: 13500,
    image: "https://www.greekality.com/wp-content/uploads/2022/01/moussaka.png",
    categoryId: {
      _id: "6746a9e314414cfa9402b5eb",
      name: "Хямдралтай",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e5494780",
    name: "Spanish Cuisine",
    price: 12500,
    image:
      "https://www.discoverspain.today/wp-content/uploads/2024/01/Spanish-paella-spanish-foods.jpg",
    categoryId: {
      _id: "6746aa0bc4b0fe49cd307e72",
      name: "Үндсэн хоол",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e5494781",
    name: "Turkish Food",
    price: 9500,
    image:
      "https://www.cazbar.com/wp-content/uploads/2024/07/mahsa-shamshiri-fard-xlHOUotnpTc-unsplash-scaled.jpg",
    categoryId: {
      _id: "6746aa0bc4b0fe49cd307e72",
      name: "Үндсэн хоол",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e5494782",
    name: "Middle Eastern Meals",
    price: 10000,
    image:
      "https://ik.imagekit.io/munchery/blog/tr:w-768/old-meets-new-the-roots-and-current-trends-of-middle-eastern-cooking.jpeg",
    categoryId: {
      _id: "6746aa0bc4b0fe49cd307e72",
      name: "Үндсэн хоол",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
  {
    _id: "6746aa4722747e83e5494783",
    name: "Caribbean Cuisine",
    price: 11000,
    image:
      "https://foodinstitute.com/wp-content/uploads/2022/01/caribbean-food-trend.jpg",
    categoryId: {
      _id: "6746aa0bc4b0fe49cd307e72",
      name: "Үндсэн хоол",
      __v: 0,
    },
    ingredient: "Хулуу, төмс, лууван , сонгино, цөцгийн тос, самрын үр ",
    __v: 0,
  },
];

export const HomeProductZone = () => {
  const groupedData = groupBy(foodDatas, (food) => food.categoryId.name);

  return (
    <main>
      <div className="container m-auto">
        <div className="pb-[82px]">
          <div className="flex flex-col gap-20">
            {Object.keys(groupedData).map((categoryName) => (
              <ProductSeleCol
                categoryName={categoryName}
                key={categoryName}
                foodDatas={groupedData[categoryName]}
              />
            ))}

            {/* <ProductMainDish />
            <ProductSaladsSnacks />
            <ProductDessert /> */}
          </div>
        </div>
      </div>
    </main>
  );
};
