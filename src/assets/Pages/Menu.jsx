import DishCard from "../Componenets/DishCard.jsx";
import "./Menu.scss";

import dish1 from "../Images/dish1.jpeg";
import dish2 from "../Images/dish2.jpg";
import dish3 from "../Images/dish3.webp";
import dish4 from "../Images/dish4.jpeg";
import dish5 from "../Images/dish5.jpeg";
import dish6 from "../Images/dish6.jpg";
import dish7 from "../Images/dish7.webp";
import dish8 from "../Images/dish8.jpg";
import dish9 from "../Images/dish9.webp";
import dish10 from "../Images/dish10.webp";
import dish11 from "../Images/dish11.jpg";
import dish12 from "../Images/dish12.jpeg";
import dish13 from "../Images/dish13.avif";
import dish14 from "../Images/dish14.jpeg";

const dishes = [
  {
    name: "Chole-Bhature",
    description: "Rich, spicy Punjabi chole served with soft, fluffy bhature.",
    price: 70,
    image: dish1,
  },

  {
    name: "Veg Paneer",
    description:
      "Soft paneer cubes cooked in a creamy, flavorful Indian gravy.",
    price: 140,
    image: dish2,
  },

  {
    name: "Grilled Sandwich",
    description:
      "Crispy, cheesy sandwich stuffed with fresh veggies and sauces.",
    price: 80,
    image: dish3,
  },

  {
    name: "Pasta Alfredo",
    description: "Italian-style pasta tossed in rich, creamy Alfredo sauce.",
    price: 110,
    image: dish4,
  },

  {
    name: "Pav Bhaji",
    description:
      "Mumbai’s favorite buttery pav served with spicy, mashed bhaji.",
    price: 70,
    image: dish5,
  },

  {
    name: "Poha",
    description:
      "Light, fluffy poha cooked with onions, peanuts, and mild spices.",
    price: 20,
    image: dish6,
  },

  {
    name: "Veg Biryani",
    description:
      "Light, fluffy poha cooked with onions, peanuts, and mild spices.",
    price: 180,
    image: dish7,
  },

  {
  name: "Cupcake",
  description: "Soft, sweet, and fluffy cupcake topped with creamy frosting.",
  price: 70,
  image: dish8,
},
{
  name: "Dessert",
  description: "Delicious variety of sweet treats to satisfy your cravings.",
  price: 70,
  image: dish9,
},
{
  name: "Salad",
  description: "Fresh mixed greens with vegetables, drizzled with a light dressing.",
  price: 130,
  image: dish10,
},
{
  name: "Cucumber-Salad",
  description: "Refreshing cucumber slices tossed in a tangy and creamy dressing.",
  price: 180,
  image: dish11,
},
{
  name: "French Fries",
  description: "Crispy golden fries, lightly salted and perfect as a snack.",
  price: 70,
  image: dish12,
},
{
  name: "Pizza",
  description: "Cheesy pizza with your choice of toppings on a thin, soft crust.",
  price: 100,
  image: dish13,
},
{
  name: "Burger",
  description: "Juicy patty with fresh veggies, cheese, and sauces in a soft bun.",
  price: 90,
  image: dish14,
}

];

export default function Menu() {
  return (
    <div className="menu">
      {dishes.map((dish, index) => (
        <DishCard key={index} {...dish} />
      ))}
    </div>
  );
}
