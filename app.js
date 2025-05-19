const workoutImages = [
  "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/2780768/pexels-photo-2780768.jpeg?auto=compress&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&w=600&h=400&fit=crop",
];

const mealImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=compress&w=600&h=400&fit=crop",
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=compress&w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=compress&w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=compress&w=600&h=400&fit=crop"
];

const leftSymbols = [
  "fa-dumbbell",
  "fa-running",
  "fa-heartbeat",
  "fa-bolt",
  "fa-bicycle",
  "fa-person-walking",
];

const rightSymbols = [
  "fa-utensils",
  "fa-apple-alt",
  "fa-seedling",
  "fa-carrot",
  "fa-lemon",
  "fa-pepper-hot",
];

const mealCategories = {
  vegan: [
    "Lentil & Sweet Potato Curry", "Chickpea Buddha Bowl", "Tofu Banh Mi", 
    "Jackfruit Tacos", "Mushroom Walnut Bolognese", "Ethiopian Misir Wot",
    "Korean Bibimbap (Vegan)", "Jamaican Callaloo", "Indian Chana Masala",
    "Lebanese Mujadara", "Thai Green Papaya Salad", "Nigerian Bean Porridge"
  ],
  highProtein: [
    "Grilled Salmon Teriyaki", "Turkey & Quinoa Stuffed Peppers", 
    "Beef Bulgogi Bowl", "Greek Chicken Souvlaki", "Tuna Poke Bowl",
    "Peruvian Lomo Saltado", "Moroccan Lamb Tagine", "Vietnamese Pho Bo",
    "Brazilian Feijoada", "Filipino Adobo Chicken", "South African Bobotie",
    "Argentinian Asado"
  ],
  lowCalorie: [
    "Zucchini Noodles Primavera", "Shrimp Ceviche", "Cauliflower Fried Rice",
    "Turkish Shepherd's Salad", "Vietnamese Goi Cuon", "Japanese Hiyayakko",
    "Spanish Gazpacho", "Lebanese Fattoush", "Mexican Ceviche de Camaron",
    "Greek Spanakorizo", "Thai Larb Gai", "Italian Caprese Stuffed Avocados"
  ],
  cultural: [
    "Japanese Okonomiyaki", "Senegalese Thieboudienne", "Polish Pierogi",
    "Malaysian Laksa", "Omani Shuwa", "Guatemalan Pepian",
    "Armenian Dolma", "Finnish Lohikeitto", "Portuguese Bacalhau",
    "Cuban Ropa Vieja", "Iraqi Masgouf", "Australian Wattleseed Crusted Barramundi"
  ],
  balanced: [
    "Mediterranean Grain Bowl", "Balinese Nasi Campur", "Turkish Menemen",
    "Korean Bibimbap", "Egyptian Koshari", "Filipino Sinigang",
    "Hungarian Goulash", "Persian Fesenjan", "Ukrainian Borscht",
    "Colombian Sancocho", "Nepalese Dal Bhat", "Tibetan Thukpa"
  ]
};

const workoutPlans = {
  strength: [
    "Push-ups: 3x12", "Pull-ups: 3x8", "Squats: 4x15", 
    "Deadlifts: 3x10", "Bench Press: 4x8", "Russian Twists: 3x20"
  ],
  hiit: [
    "Burpees: 1min", "Mountain Climbers: 1min", "Jump Squats: 1min",
    "Plank Jacks: 1min", "Skater Jumps: 1min", "Rest: 30sec"
  ],
  cardio: [
    "Running: 30min", "Cycling: 45min", "Rowing: 20min",
    "Jump Rope: 15min", "Stair Climbing: 20min", "Swimming: 30min"
  ],
  recovery: [
    "Yoga Flow: 30min", "Foam Rolling: 15min", "Dynamic Stretching: 20min",
    "Tai Chi: 25min", "Pilates: 30min", "Breathing Exercises: 10min"
  ]
};

const fullWorkoutPlan = [
  {
    day: "Monday",
    focus: "Full Body Strength",
    exercises: [
      "Barbell Squats 4x8", "Deadlifts 3x6", "Bench Press 4x8",
      "Pull-ups 3x8", "Plank 3x1min"
    ]
  },
  {
    day: "Tuesday",
    focus: "HIIT Cardio",
    exercises: [
      "Burpees 30sec", "Mountain Climbers 30sec", "Jump Squats 30sec",
      "Rest 15sec (Repeat 5 rounds)"
    ]
  },
  {
    day: "Wednesday",
    focus: "Upper Body & Core",
    exercises: [
      "Push-ups 4x12", "Dumbbell Rows 3x10", "Shoulder Press 3x10",
      "Russian Twists 3x20", "Bicycle Crunches 3x15"
    ]
  },
  {
    day: "Thursday",
    focus: "Lower Body Strength",
    exercises: [
      "Lunges 3x12", "Leg Press 4x10", "Romanian Deadlifts 3x8",
      "Calf Raises 3x15", "Glute Bridges 3x12"
    ]
  },
  {
    day: "Friday",
    focus: "Active Recovery",
    exercises: [
      "Yoga Flow 30min", "Foam Rolling 15min", 
      "Dynamic Stretching 20min"
    ]
  },
  {
    day: "Saturday",
    focus: "Functional Training",
    exercises: [
      "Kettlebell Swings 3x15", "Battle Ropes 3x1min", 
      "Box Jumps 3x10", "Medicine Ball Slams 3x12"
    ]
  },
  {
    day: "Sunday",
    focus: "Rest & Mobility",
    exercises: [
      "Yin Yoga 45min", "Mobility Drills 20min", 
      "Breathing Exercises 10min"
    ]
  }
];

class SideColumn extends React.Component {
  render() {
    const { symbols, images } = this.props;
    return (
      <div className="side-column">
        <div className="side-symbols">
          {symbols.map((symbol, index) => (
            <i key={index} className={`fas ${symbol}`}></i>
          ))}
        </div>
        <div className="side-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
    );
  }
}

class ProgressTracker extends React.Component {
  state = {
    waterIntake: 0,
    dailyGoal: 3000, // ml
    workoutProgress: Array(7).fill(false)
  };

  handleWaterChange = (amount) => {
    this.setState(prev => ({
      waterIntake: Math.max(0, prev.waterIntake + amount)
    }));
  };

  toggleWorkoutDay = (index) => {
    this.setState(prev => ({
      workoutProgress: prev.workoutProgress.map((val, i) => 
        i === index ? !val : val
      )
    }));
  };

  render() {
    const { waterIntake, dailyGoal, workoutProgress } = this.state;
    const progress = (waterIntake / dailyGoal) * 100;

    return (
      <div className="progress-tracker">
        <h2><i className="fas fa-chart-line"></i> Daily Progress</h2>

        <div className="checklist-item">
          <h3><i className="fas fa-tint"></i> Water Intake</h3>
          <div className="water-tracker">
            <div className="water-progress" style={{ width: `${progress}%` }}></div>
            <span>{waterIntake}ml / {dailyGoal}ml</span>
          </div>
          <div className="water-controls">
            <button onClick={() => this.handleWaterChange(250)}>+250ml</button>
            <button onClick={() => this.handleWaterChange(500)}>+500ml</button>
            <button onClick={() => this.handleWaterChange(-250)}>-250ml</button>
          </div>
        </div>

        <div className="checklist-item">
          <h3><i className="fas fa-dumbbell"></i> 7-Day Workout Plan</h3>
          {fullWorkoutPlan.map((day, index) => (
            <div key={day.day} className="workout-day">
              <label>
                <input
                  type="checkbox"
                  checked={workoutProgress[index]}
                  onChange={() => this.toggleWorkoutDay(index)}
                />
                <strong>{day.day}</strong>: {day.focus}
              </label>
              <ul>
                {day.exercises.map(ex => <li key={ex}>{ex}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class MealGenerator extends React.Component {
  state = {
    meal: "Click to generate",
    selectedCategory: 'balanced'
  };

  generateMeal = () => {
    const { selectedCategory } = this.state;
    const meals = mealCategories[selectedCategory];
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    this.setState({ meal: randomMeal });
  };
import React from "react";

// --- BEGIN MEAL DATA ---
const mealCategories = {
  vegan: [
    {
      name: "Vegan Lentil Soup",
      ingredients: [
        "1 cup dried lentils",
        "1 onion, chopped",
        "2 carrots, diced",
        "2 celery stalks, diced",
        "3 cloves garlic, minced",
        "6 cups vegetable broth",
        "1 tsp cumin",
        "1 tsp smoked paprika",
        "Salt & pepper to taste"
      ],
      steps: [
        "Sauté onion, carrots, and celery in a pot until soft.",
        "Add garlic, cumin, and paprika; cook 1 minute.",
        "Add lentils and broth. Bring to a boil.",
        "Reduce heat and simmer 25-30 minutes.",
        "Season with salt and pepper. Serve hot."
      ]
    },
    {
      name: "Chickpea Curry",
      ingredients: [
        "2 cans chickpeas, drained and rinsed",
        "1 onion, chopped",
        "3 cloves garlic, minced",
        "1 tbsp curry powder",
        "1 can diced tomatoes",
        "1 can coconut milk",
        "2 cups spinach",
        "1 tbsp olive oil",
        "Salt & pepper to taste"
      ],
      steps: [
        "Sauté onion and garlic in olive oil until soft.",
        "Add curry powder and cook for 1 minute.",
        "Add chickpeas, tomatoes, and coconut milk.",
        "Simmer for 15 minutes, then stir in spinach.",
        "Season and serve with rice."
      ]
    },
    {
      name: "BBQ Pulled Jackfruit Sandwich",
      ingredients: [
        "1 can young green jackfruit in brine",
        "1/2 cup BBQ sauce",
        "1 onion, sliced",
        "1 tbsp olive oil",
        "4 sandwich buns",
        "Coleslaw (optional)"
      ],
      steps: [
        "Drain and rinse jackfruit. Shred with forks.",
        "Sauté onion in oil until soft. Add jackfruit.",
        "Stir in BBQ sauce. Simmer 10 minutes.",
        "Serve on buns with optional coleslaw."
      ]
    },
    {
      name: "Vegan Chili",
      ingredients: [
        "1 can kidney beans",
        "1 can black beans",
        "1 can corn",
        "1 can diced tomatoes",
        "1 bell pepper, chopped",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 tbsp chili powder",
        "1 tsp cumin",
        "Salt & pepper to taste"
      ],
      steps: [
        "Sauté onion, bell pepper, and garlic until soft.",
        "Add all other ingredients.",
        "Simmer 20 minutes. Serve hot."
      ]
    },
    {
      name: "Stuffed Bell Peppers",
      ingredients: [
        "4 bell peppers",
        "1 cup cooked quinoa",
        "1 can black beans, rinsed",
        "1 cup corn",
        "1/2 cup salsa",
        "1 tsp cumin",
        "Salt & pepper to taste"
      ],
      steps: [
        "Preheat oven to 375°F.",
        "Cut tops off peppers and remove seeds.",
        "Mix quinoa, beans, corn, salsa, cumin, salt, and pepper.",
        "Stuff peppers and bake 30 minutes."
      ]
    },
    {
      name: "Vegan Pad Thai",
      ingredients: [
        "8 oz rice noodles",
        "1 block tofu, cubed",
        "2 cups bean sprouts",
        "2 carrots, julienned",
        "3 green onions, sliced",
        "1/4 cup peanuts, chopped",
        "2 tbsp soy sauce",
        "2 tbsp lime juice",
        "1 tbsp brown sugar",
        "1 tbsp peanut butter"
      ],
      steps: [
        "Cook noodles and set aside.",
        "Sauté tofu until golden.",
        "Mix sauce: soy, lime, sugar, peanut butter.",
        "Toss noodles, tofu, veggies, and sauce.",
        "Garnish with peanuts."
      ]
    },
    {
      name: "Vegan Shepherd's Pie",
      ingredients: [
        "4 potatoes, peeled and cubed",
        "1 cup frozen peas",
        "2 carrots, diced",
        "1 onion, chopped",
        "1 cup lentils, cooked",
        "1 cup vegetable broth",
        "2 tbsp olive oil",
        "Salt & pepper to taste"
      ],
      steps: [
        "Boil potatoes and mash with olive oil.",
        "Sauté onion and carrots, add lentils and broth.",
        "Pour veggie mix in baking dish, top with mashed potatoes.",
        "Bake at 400°F for 20 minutes."
      ]
    },
    {
      name: "Vegan Caesar Salad",
      ingredients: [
        "1 head romaine lettuce",
        "1/2 cup croutons",
        "1/4 cup vegan parmesan",
        "1/4 cup vegan Caesar dressing"
      ],
      steps: [
        "Chop lettuce.",
        "Toss with dressing, croutons, and parmesan.",
        "Serve chilled."
      ]
    },
    {
      name: "Vegan Burrito Bowl",
      ingredients: [
        "1 cup brown rice, cooked",
        "1 can black beans, rinsed",
        "1 avocado, sliced",
        "1/2 cup salsa",
        "1/2 cup corn",
        "1/4 cup cilantro, chopped"
      ],
      steps: [
        "Layer rice, beans, corn, salsa, avocado, and cilantro in a bowl.",
        "Serve immediately."
      ]
    },
    {
      name: "Vegan Mushroom Stroganoff",
      ingredients: [
        "8 oz mushrooms, sliced",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 cup vegetable broth",
        "1/2 cup coconut cream",
        "8 oz pasta",
        "1 tbsp olive oil",
        "Salt & pepper to taste"
      ],
      steps: [
        "Cook pasta.",
        "Sauté onion, garlic, and mushrooms until soft.",
        "Add broth and simmer 5 minutes.",
        "Stir in coconut cream, combine with pasta.",
        "Season and serve."
      ]
    }
  ],

  highProtein: [
    {
      name: "Grilled Tofu Steaks",
      ingredients: [
        "1 block extra-firm tofu",
        "2 tbsp soy sauce",
        "1 tbsp olive oil",
        "1 tsp garlic powder",
        "1 tsp smoked paprika"
      ],
      steps: [
        "Press and slice tofu into steaks.",
        "Marinate in soy sauce, olive oil, garlic powder, and paprika for 30 minutes.",
        "Grill or pan-sear 4-5 minutes per side.",
        "Serve with steamed vegetables."
      ]
    },
    {
      name: "Quinoa Black Bean Salad",
      ingredients: [
        "1 cup cooked quinoa",
        "1 can black beans, rinsed",
        "1 red bell pepper, diced",
        "1/4 cup cilantro, chopped",
        "1 lime, juiced",
        "2 tbsp olive oil",
        "Salt & pepper to taste"
      ],
      steps: [
        "Combine quinoa, black beans, bell pepper, and cilantro in a bowl.",
        "Whisk lime juice, olive oil, salt, and pepper.",
        "Pour dressing over salad and toss to combine."
      ]
    },
    {
      name: "Lentil Walnut Loaf",
      ingredients: [
        "1 cup cooked lentils",
        "1/2 cup walnuts, chopped",
        "1/2 cup oats",
        "1/2 cup carrot, grated",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1/4 cup ketchup",
        "1 tbsp soy sauce"
      ],
      steps: [
        "Mix all ingredients in a bowl.",
        "Press into loaf pan.",
        "Bake at 375°F for 30 minutes.",
        "Cool before slicing."
      ]
    },
    {
      name: "Edamame Stir Fry",
      ingredients: [
        "2 cups shelled edamame",
        "1 bell pepper, sliced",
        "2 carrots, julienned",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "1 clove garlic, minced"
      ],
      steps: [
        "Heat sesame oil in a pan. Add garlic, cook 30 seconds.",
        "Add veggies and edamame, stir-fry 5 minutes.",
        "Add soy sauce, cook 2 minutes.",
        "Serve hot."
      ]
    },
    {
      name: "Chickpea Pancakes",
      ingredients: [
        "1 cup chickpea flour",
        "1 cup water",
        "1/2 tsp turmeric",
        "1/2 tsp cumin",
        "1/4 cup chopped spinach",
        "Salt & pepper to taste"
      ],
      steps: [
        "Mix flour, water, spices, and spinach.",
        "Pour onto hot nonstick pan, cook 2-3 min per side.",
        "Serve warm."
      ]
    },
    {
      name: "Tempeh Fajitas",
      ingredients: [
        "1 block tempeh, sliced",
        "1 onion, sliced",
        "1 bell pepper, sliced",
        "2 tbsp soy sauce",
        "1 tbsp olive oil",
        "1 tsp chili powder"
      ],
      steps: [
        "Sauté onion and bell pepper in oil.",
        "Add tempeh, soy sauce, and chili powder.",
        "Cook until golden.",
        "Serve in tortillas."
      ]
    },
    {
      name: "Seitan Stir Fry",
      ingredients: [
        "1 cup seitan, sliced",
        "1 cup broccoli florets",
        "1 carrot, sliced",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil"
      ],
      steps: [
        "Heat sesame oil, add seitan and veggies.",
        "Stir fry 5 minutes.",
        "Add soy sauce, cook 2 minutes.",
        "Serve with rice."
      ]
    },
    {
      name: "Tofu Scramble",
      ingredients: [
        "1 block firm tofu, crumbled",
        "1/2 onion, diced",
        "1/2 bell pepper, diced",
        "1 tsp turmeric",
        "1 tbsp olive oil",
        "Salt & pepper to taste"
      ],
      steps: [
        "Sauté onion and pepper in oil.",
        "Add tofu and turmeric.",
        "Cook 5 minutes, season and serve."
      ]
    },
    {
      name: "Peanut Butter Protein Oats",
      ingredients: [
        "1 cup rolled oats",
        "2 cups almond milk",
        "2 tbsp peanut butter",
        "1 scoop plant protein powder",
        "1 banana, sliced"
      ],
      steps: [
        "Cook oats in almond milk.",
        "Stir in peanut butter and protein powder.",
        "Top with banana."
      ]
    },
    {
      name: "Greek Yogurt Parfait",
      ingredients: [
        "1 cup Greek yogurt",
        "1/2 cup granola",
        "1/2 cup mixed berries",
        "1 tbsp chia seeds"
      ],
      steps: [
        "Layer yogurt, granola, and berries in a glass.",
        "Top with chia seeds.",
        "Serve chilled."
      ]
    }
  ],

  lowCalorie: [
    {
      name: "Zucchini Noodle Stir-Fry",
      ingredients: [
        "2 zucchinis, spiralized",
        "1 bell pepper, sliced",
        "1 carrot, julienned",
        "2 tbsp soy sauce",
        "1 tsp sesame oil",
        "1 clove garlic, minced"
      ],
      steps: [
        "Heat sesame oil in a pan. Add garlic and cook 30 seconds.",
        "Add bell pepper and carrot. Stir-fry 2 minutes.",
        "Add zucchini noodles and soy sauce. Cook 2-3 minutes.",
        "Serve immediately."
      ]
    },
    {
      name: "Cucumber Avocado Salad",
      ingredients: [
        "1 cucumber, sliced",
        "1 avocado, diced",
        "1/4 red onion, thinly sliced",
        "1 tbsp lemon juice",
        "Salt & pepper to taste"
      ],
      steps: [
        "Combine cucumber, avocado, and red onion in a bowl.",
        "Drizzle with lemon juice, season with salt and pepper.",
        "Toss gently and serve."
      ]
    },
    {
      name: "Tomato Basil Soup",
      ingredients: [
        "4 cups tomatoes, chopped",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "2 cups vegetable broth",
        "1/4 cup fresh basil",
        "Salt & pepper to taste"
      ],
      steps: [
        "Sauté onion and garlic until soft.",
        "Add tomatoes and broth, simmer 15 minutes.",
        "Blend until smooth, stir in basil.",
        "Season and serve."
      ]
    },
    {
      name: "Steamed Broccoli & Carrots",
      ingredients: [
        "2 cups broccoli florets",
        "2 carrots, sliced",
        "1 tbsp lemon juice",
        "Salt & pepper to taste"
      ],
      steps: [
        "Steam broccoli and carrots until tender.",
        "Drizzle with lemon juice, season and serve."
      ]
    },
    {
      name: "Asian Cabbage Salad",
      ingredients: [
        "2 cups shredded cabbage",
        "1 carrot, julienned",
        "1/4 cup green onions, sliced",
        "2 tbsp rice vinegar",
        "1 tbsp soy sauce"
      ],
      steps: [
        "Combine cabbage, carrot, and green onions.",
        "Toss with vinegar and soy sauce.",
        "Serve chilled."
      ]
    },
    {
      name: "Miso Soup",
      ingredients: [
        "4 cups water",
        "2 tbsp miso paste",
        "1/2 block tofu, cubed",
        "2 green onions, sliced",
        "1 sheet nori, sliced"
      ],
      steps: [
        "Bring water to a simmer. Add tofu and nori.",
        "Dissolve miso paste in hot water, add to pot.",
        "Add green onions, serve warm."
      ]
    },
    {
      name: "Baked Eggplant Slices",
      ingredients: [
        "1 eggplant, sliced",
        "1 tbsp olive oil",
        "1/2 tsp garlic powder",
        "Salt & pepper to taste"
      ],
      steps: [
        "Preheat oven to 400°F.",
        "Brush eggplant with oil, sprinkle with garlic powder, salt, and pepper.",
        "Bake 20 minutes, flipping halfway."
      ]
    },
    {
      name: "Apple Walnut Salad",
      ingredients: [
        "1 apple, sliced",
        "2 cups mixed greens",
        "1/4 cup walnuts",
        "1 tbsp balsamic vinegar"
      ],
      steps: [
        "Toss greens, apple, and walnuts.",
        "Drizzle with balsamic vinegar.",
        "Serve immediately."
      ]
    },
    {
      name: "Roasted Cauliflower",
      ingredients: [
        "1 head cauliflower, cut into florets",
        "2 tbsp olive oil",
        "1 tsp paprika",
        "Salt & pepper to taste"
      ],
      steps: [
        "Preheat oven to 425°F.",
        "Toss cauliflower with oil, paprika, salt, and pepper.",
        "Roast 25 minutes, turning once."
      ]
    },
    {
      name: "Spinach Strawberry Salad",
      ingredients: [
        "2 cups baby spinach",
        "1 cup strawberries, sliced",
        "1/4 cup almonds",
        "2 tbsp balsamic vinaigrette"
      ],
      steps: [
        "Toss spinach, strawberries, and almonds.",
        "Drizzle with vinaigrette.",
        "Serve chilled."
      ]
    }
  ],

  cultural: [
    {
      name: "Moroccan Tagine",
      ingredients: [
        "1 eggplant, cubed",
        "1 zucchini, sliced",
        "1 bell pepper, chopped",
        "1 can chickpeas, drained",
        "1 can diced tomatoes",
        "1 onion, chopped",
        "2 tsp ras el hanout",
        "2 tbsp olive oil",
        "Salt & pepper to taste"
      ],
      steps: [
        "Sauté onion in olive oil until soft.",
        "Add eggplant, zucchini, and bell pepper; cook 5 minutes.",
        "Stir in spices, tomatoes, and chickpeas.",
        "Simmer 20 minutes. Season and serve with couscous."
      ]
    },
    {
      name: "Japanese Miso Soup",
      ingredients: [
        "4 cups water",
        "2 tbsp miso paste",
        "1/2 block tofu, cubed",
        "2 green onions, sliced",
        "1 sheet nori, sliced",
        "1/2 cup sliced mushrooms"
      ],
      steps: [
        "Bring water to a simmer. Add mushrooms and cook 5 minutes.",
        "Dissolve miso paste in a small amount of hot water, then add to pot.",
        "Add tofu, green onions, and nori. Heat gently (do not boil).",
        "Serve warm."
      ]
    },
    {
      name: "Indian Chana Masala",
      ingredients: [
        "2 cans chickpeas, rinsed",
        "1 onion, chopped",
        "2 tomatoes, chopped",
        "2 cloves garlic, minced",
        "1 tbsp garam masala",
        "1 tsp cumin",
        "1 tsp turmeric",
        "1 tbsp oil",
        "Salt to taste"
      ],
      steps: [
        "Sauté onion and garlic in oil.",
        "Add spices, cook 1 minute.",
        "Add tomatoes and chickpeas, simmer 15 minutes.",
        "Serve with rice."
      ]
    },
    {
      name: "Italian Minestrone",
      ingredients: [
        "1 onion, chopped",
        "2 carrots, diced",
        "2 celery stalks, diced",
        "1 zucchini, diced",
        "1 can white beans",
        "1 can diced tomatoes",
        "4 cups vegetable broth",
        "1 tsp Italian herbs"
      ],
      steps: [
        "Sauté onion, carrots, and celery.",
        "Add remaining ingredients, simmer 20 minutes.",
        "Serve hot."
      ]
    },
    {
      name: "Thai Green Curry",
      ingredients: [
        "1 can coconut milk",
        "2 tbsp green curry paste",
        "1 cup broccoli florets",
        "1 cup snap peas",
        "1 bell pepper, sliced",
        "1 block tofu, cubed",
        "1 tbsp oil"
      ],
      steps: [
        "Sauté curry paste in oil.",
        "Add coconut milk and veggies, simmer 10 minutes.",
        "Add tofu, cook 5 minutes.",
        "Serve with rice."
      ]
    },
    {
      name: "French Ratatouille",
      ingredients: [
        "1 eggplant, diced",
        "1 zucchini, diced",
        "1 bell pepper, diced",
        "1 onion, chopped",
        "2 tomatoes, chopped",
        "2 tbsp olive oil",
        "1 tsp herbs de Provence"
      ],
      steps: [
        "Sauté onion in oil.",
        "Add veggies and herbs, cook 15 minutes.",
        "Serve warm."
      ]
    },
    {
      name: "Mexican Black Bean Tacos",
      ingredients: [
        "8 corn tortillas",
        "1 can black beans, rinsed",
        "1 avocado, sliced",
        "1/2 cup salsa",
        "1/4 cup cilantro, chopped"
      ],
      steps: [
        "Warm tortillas.",
        "Fill with beans, avocado, salsa, and cilantro.",
        "Serve immediately."
      ]
    },
    {
      name: "Greek Salad",
      ingredients: [
        "2 cups chopped cucumber",
        "1 cup cherry tomatoes, halved",
        "1/2 cup kalamata olives",
        "1/4 cup red onion, sliced",
        "1/4 cup vegan feta (optional)",
        "2 tbsp olive oil",
        "1 tbsp lemon juice"
      ],
      steps: [
        "Combine all ingredients.",
        "Toss with olive oil and lemon juice.",
        "Serve chilled."
      ]
    },
    {
      name: "Lebanese Tabbouleh",
      ingredients: [
        "1/2 cup bulgur wheat",
        "2 cups parsley, chopped",
        "1 tomato, diced",
        "1 cucumber, diced",
        "2 green onions, sliced",
        "2 tbsp lemon juice",
        "2 tbsp olive oil"
      ],
      steps: [
        "Soak bulgur in hot water 15 minutes, drain.",
        "Combine with veggies, lemon juice, and oil.",
        "Mix well and serve."
      ]
    },
    {
      name: "Spanish Gazpacho",
      ingredients: [
        "4 tomatoes, chopped",
        "1 cucumber, chopped",
        "1/2 bell pepper, chopped",
        "1/4 cup red onion, chopped",
        "2 tbsp olive oil",
        "2 tbsp red wine vinegar"
      ],
      steps: [
        "Blend all ingredients until smooth.",
        "Chill for 2 hours.",
        "Serve cold."
      ]
    }
  ],

  balanced: [
    {
      name: "Mediterranean Buddha Bowl",
      ingredients: [
        "1 cup cooked brown rice",
        "1/2 cup cherry tomatoes, halved",
        "1/2 cup cucumber, diced",
        "1/4 cup hummus",
        "1/4 cup kalamata olives",
        "1/2 cup roasted chickpeas",
        "1 tbsp olive oil",
        "Lemon wedges"
      ],
      steps: [
        "Arrange rice, tomatoes, cucumber, olives, and chickpeas in a bowl.",
        "Top with hummus and drizzle with olive oil.",
        "Serve with lemon wedges."
      ]
    },
    {
      name: "Sweet Potato & Kale Hash",
      ingredients: [
        "1 large sweet potato, diced",
        "2 cups chopped kale",
        "1/2 onion, diced",
        "2 tbsp olive oil",
        "1/2 tsp smoked paprika",
        "Salt & pepper to taste"
      ],
      steps: [
        "Sauté sweet potato and onion in olive oil until tender.",
        "Add kale and paprika, cook until kale is wilted.",
        "Season with salt and pepper. Serve hot."
      ]
    },
    {
      name: "Brown Rice Veggie Stir Fry",
      ingredients: [
        "1 cup cooked brown rice",
        "1 cup mixed veggies",
        "1 tbsp soy sauce",
        "1 tsp sesame oil"
      ],
      steps: [
        "Heat sesame oil, add veggies and stir fry.",
        "Add rice and soy sauce, cook 2 minutes.",
        "Serve warm."
      ]
    },
    {
      name: "Lentil Spinach Soup",
      ingredients: [
        "1 cup lentils",
        "2 cups spinach",
        "1 onion, chopped",
        "2 carrots, diced",
        "4 cups vegetable broth"
      ],
      steps: [
        "Sauté onion and carrots.",
        "Add lentils and broth, simmer 20 minutes.",
        "Add spinach and cook 5 minutes.",
        "Serve hot."
      ]
    },
    {
      name: "Chickpea Avocado Toast",
      ingredients: [
        "2 slices whole grain bread",
        "1 avocado, mashed",
        "1/2 cup chickpeas, mashed",
        "1 tsp lemon juice",
        "Salt & pepper to taste"
      ],
      steps: [
        "Mash avocado and chickpeas with lemon juice.",
        "Spread on toast, season and serve."
      ]
    },
    {
      name: "Quinoa Veggie Bowl",
      ingredients: [
        "1 cup cooked quinoa",
        "1 cup steamed broccoli",
        "1/2 cup cherry tomatoes, halved",
        "1/4 cup shredded carrots",
        "2 tbsp tahini dressing"
      ],
      steps: [
        "Arrange quinoa, veggies in a bowl.",
        "Drizzle with tahini dressing.",
        "Serve immediately."
      ]
    },
    {
      name: "Eggplant Chickpea Stew",
      ingredients: [
        "1 eggplant, diced",
        "1 can chickpeas, drained",
        "1 can diced tomatoes",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "1 tbsp olive oil"
      ],
      steps: [
        "Sauté onion and garlic in oil.",
        "Add eggplant, cook 5 minutes.",
        "Add chickpeas and tomatoes, simmer 15 minutes.",
        "Serve hot."
      ]
    },
    {
      name: "Veggie Omelette",
      ingredients: [
        "2 eggs",
        "1/4 cup spinach",
        "1/4 cup diced tomato",
        "1/4 cup mushrooms, sliced",
        "1 tbsp olive oil"
      ],
      steps: [
        "Beat eggs, pour into hot pan with oil.",
        "Add veggies, cook until set.",
        "Fold and serve."
      ]
    },
    {
      name: "Salmon & Quinoa Plate",
      ingredients: [
        "1 salmon fillet",
        "1 cup cooked quinoa",
        "1/2 cup steamed asparagus",
        "1 tbsp olive oil",
        "Lemon wedge"
      ],
      steps: [
        "Bake salmon at 400°F for 15 minutes.",
        "Serve with quinoa, asparagus, and lemon."
      ]
    },
    {
      name: "Chicken & Veggie Skewers",
      ingredients: [
        "1 chicken breast, cubed",
        "1 bell pepper, cubed",
        "1 zucchini, sliced",
        "1 onion, cubed",
        "2 tbsp olive oil",
        "Salt & pepper"
      ],
      steps: [
        "Thread chicken and veggies onto skewers.",
        "Brush with oil, season.",
        "Grill or bake until chicken is cooked through."
      ]
    }
  ]
};
// --- END MEAL DATA ---

class MealGenerator extends React.Component {
  state = {
    meal: null,
    selectedCategory: 'vegan'
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
        <h2>
          <i className="fas fa-utensils"></i> Multi-Cultural Meal Generator
        </h2>
        <div className="meal-controls">
          <select
            value={selectedCategory}
            onChange={this.handleCategoryChange}
          >
            <option value="vegan">Vegan</option>
            <option value="highProtein">High Protein</option>
            <option value="lowCalorie">Low Calorie</option>
            <option value="cultural">Cultural Specials</option>
            <option value="balanced">Balanced Meals</option>
          </select>
          <button onClick={this.generateMeal}>Generate Meal</button>
        </div>
        {meal && (
          <div className="recipe-card">
            <h3>{meal.name}</h3>
            <h4>Ingredients:</h4>
            <ul>
              {meal.ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
            <h4>Steps:</h4>
            <ol>
              {meal.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    );
  }
}

export default MealGenerator;

  handleCategoryChange = (e) => {
    this.setState({ selectedCategory: e.target.value });
  };

  render() {
    return (
      <div className="meal-generator">
        <h2><i className="fas fa-utensils"></i> Multi-Cultural Meal Generator</h2>

        <div className="meal-controls">
          <select 
            value={this.state.selectedCategory} 
            onChange={this.handleCategoryChange}
          >
            <option value="vegan">Vegan</option>
            <option value="highProtein">High Protein</option>
            <option value="lowCalorie">Low Calorie</option>
            <option value="cultural">Cultural Specials</option>
            <option value="balanced">Balanced Meals</option>
          </select>

          <button onClick={this.generateMeal}>Generate Meal</button>
        </div>

        <div className="checklist-item">
          <p>{this.state.meal}</p>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="main-layout">
      <SideColumn symbols={leftSymbols} images={workoutImages} />
      <div className="app-container">
        <h1><i className="fas fa-heartbeat"></i> Global Fitness Pro App</h1>
        <ProgressTracker />
        <MealGenerator />
      </div>
      <SideColumn symbols={rightSymbols} images={mealImages} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
