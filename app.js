import React from "react";

// Meal data categorized by diet type
const mealCategories = {
  vegan: [
    {
      name: "Vegan Buddha Bowl",
      ingredients: [
        "1 cup quinoa",
        "1 sweet potato",
        "1 cup chickpeas",
        "1 avocado",
        "1 cup spinach",
        "Tahini dressing"
      ],
      steps: [
        "Cook quinoa and set aside.",
        "Roast sweet potatoes and chickpeas.",
        "Assemble bowl with spinach, quinoa, sweet potato, chickpeas, and avocado.",
        "Drizzle with tahini dressing and serve."
      ]
    },
    {
      name: "Vegan Stir-Fry",
      ingredients: [
        "2 cups mixed vegetables",
        "1 block tofu",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "1 tsp ginger",
        "1 cup brown rice"
      ],
      steps: [
        "Cook brown rice.",
        "Sauté tofu until golden brown.",
        "Add vegetables and stir-fry with soy sauce and sesame oil.",
        "Serve with rice."
      ]
    }
  ],
  keto: [
    {
      name: "Keto Chicken Alfredo",
      ingredients: [
        "2 chicken breasts",
        "1 cup heavy cream",
        "1/2 cup parmesan cheese",
        "1 zucchini (spiralized)",
        "1 tbsp olive oil"
      ],
      steps: [
        "Cook chicken in olive oil and set aside.",
        "In the same pan, heat cream and parmesan to make the sauce.",
        "Add spiralized zucchini and cooked chicken.",
        "Simmer for 5 minutes and serve."
      ]
    },
    {
      name: "Keto Egg Muffins",
      ingredients: [
        "6 eggs",
        "1/2 cup spinach",
        "1/4 cup cheese",
        "1/4 cup diced bell peppers",
        "Salt and pepper"
      ],
      steps: [
        "Preheat oven to 375°F (190°C).",
        "Mix all ingredients in a bowl.",
        "Pour into muffin tin and bake for 20 minutes.",
        "Cool slightly and enjoy."
      ]
    }
  ],
  "high-protein": [
    {
      name: "Grilled Salmon with Quinoa",
      ingredients: [
        "1 salmon fillet",
        "1 cup cooked quinoa",
        "1/2 cup steamed broccoli",
        "Lemon juice",
        "Salt and pepper"
      ],
      steps: [
        "Season salmon with salt, pepper, and lemon juice.",
        "Grill salmon until cooked through.",
        "Serve with quinoa and steamed broccoli."
      ]
    },
    {
      name: "Turkey Chili",
      ingredients: [
        "1 lb ground turkey",
        "1 can kidney beans",
        "1 can diced tomatoes",
        "1 onion",
        "Chili powder"
      ],
      steps: [
        "Sauté onion, then brown turkey.",
        "Add beans, tomatoes, and chili powder.",
        "Simmer for 20 minutes and serve."
      ]
    }
  ],
  "low-carb": [
    {
      name: "Zucchini Noodles with Pesto",
      ingredients: [
        "2 zucchinis (spiralized)",
        "1/2 cup pesto",
        "Cherry tomatoes",
        "Parmesan cheese"
      ],
      steps: [
        "Sauté zucchini noodles briefly.",
        "Toss with pesto and cherry tomatoes.",
        "Top with parmesan and serve."
      ]
    },
    {
      name: "Cauliflower Fried Rice",
      ingredients: [
        "2 cups riced cauliflower",
        "2 eggs",
        "1/2 cup peas and carrots",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil"
      ],
      steps: [
        "Sauté vegetables and cauliflower rice.",
        "Push to the side and scramble eggs.",
        "Mix everything with soy sauce and sesame oil.",
        "Serve hot."
      ]
    }
  ]
};

class MealGenerator extends React.Component {
  state = {
    meal: null,
    selectedCategory: "vegan",
  };

  generateMeal = () => {
    const { selectedCategory } = this.state;
    const meals = mealCategories[selectedCategory];
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    this.setState({ meal: randomMeal });
  };

  handleCategoryChange = (e) => {
    this.setState({ selectedCategory: e.target.value, meal: null });
  };

  render() {
    const { meal, selectedCategory } = this.state;

    return (
      <div className="meal-generator">
        <h2><i className="fas fa-utensils"></i> Meal Generator</h2>

        <select value={selectedCategory} onChange={this.handleCategoryChange}>
          {Object.keys(mealCategories).map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <button onClick={this.generateMeal}>Generate Meal</button>

        {meal && (
          <div className="meal-details">
            <h3>{meal.name}</h3>
            <h4>Ingredients:</h4>
            <ul>
              {meal.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
            </ul>
            <h4>Steps:</h4>
            <ol>
              {meal.steps.map((step, i) => <li key={i}>{step}</li>)}
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default MealGenerator;


