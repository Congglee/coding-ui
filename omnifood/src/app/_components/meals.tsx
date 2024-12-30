import styles from "@/styles/meals.module.css";
import { Check, Flame, Star, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

const meals = [
  {
    img: "/meals/meal-1.jpg",
    tags: ["Vegetarian"],
    title: "Japanese Gyozas",
    calories: 650,
    nutriScore: 74,
    rating: 4.9,
    reviews: 537,
  },
  {
    img: "/meals/meal-2.jpg",
    tags: ["Vegan", "Paleo"],
    title: "Avocado Salad",
    calories: 400,
    nutriScore: 92,
    rating: 4.8,
    reviews: 441,
  },
];

const diets = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Gluten-free",
  "Lactose-free",
  "Keto",
  "Paleo",
  "Low FODMAP",
  "Kid-friendly",
];

export default function Meals() {
  return (
    <section className={styles.sectionMeals} id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="container grid grid--3-cols margin-bottom-md">
        {meals.map((meal, index) => (
          <div className={styles.meal} key={index}>
            <img src={meal.img} className={styles.mealImg} alt={meal.title} />
            <div className={styles.mealContent}>
              <div className={styles.mealTags}>
                <span className={`${styles.tag} ${styles.tagVegetarian}`}>
                  {meal.tags[0]}
                </span>
              </div>
              <p className={styles.mealTitle}>{meal.title}</p>
              <ul className={styles.mealAttributes}>
                <li className={styles.mealAttribute}>
                  <Flame className={styles.mealIcon} name="flame-outline" />
                  <span>
                    <strong>{meal.calories}</strong> calories
                  </span>
                </li>
                <li className={styles.mealAttribute}>
                  <UtensilsCrossed
                    className={styles.mealIcon}
                    name="restaurant-outline"
                  />
                  <span>
                    NutriScore ® <strong>{meal.nutriScore}</strong>
                  </span>
                </li>
                <li className={styles.mealAttribute}>
                  <Star className={styles.mealIcon} name="star-outline" />
                  <span>
                    <strong>{meal.rating}</strong> rating ({meal.reviews})
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
        <div className="diets">
          <h3 className="heading-tertiary">Works with any diet:</h3>
          <ul className="list">
            {diets.map((diet, index) => (
              <li className="list-item" key={index}>
                <Check className="list-icon" name="checkmark-outline" />
                <span>{diet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`container ${styles.allRecipes}`}>
        <Link href="#" className="link">
          See all recipes →
        </Link>
      </div>
    </section>
  );
}
