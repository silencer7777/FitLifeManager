// 200+ healthy, multicultural, dietary, and relevant meals
const mealCategories = {
  vegan: [
    "Lentil & Sweet Potato Curry",
    "Chickpea Buddha Bowl",
    "Tofu Banh Mi",
    "Jackfruit Tacos",
    "Mushroom Walnut Bolognese",
    "Ethiopian Misir Wot",
    "Korean Vegan Bibimbap",
    "Jamaican Callaloo",
    "Indian Chana Masala",
    "Lebanese Mujadara",
    "Thai Green Papaya Salad",
    "Nigerian Bean Porridge",
    "Vietnamese Vegan Pho",
    "Mexican Vegan Pozole",
    "Greek Lentil Soup",
    "Moroccan Vegetable Tagine",
    "Japanese Vegetable Tempura",
    "Peruvian Quinoa Stuffed Peppers",
    "Filipino Ginataang Gulay",
    "Indonesian Gado-Gado",
    "Israeli Falafel Plate",
    "Vegan Sushi Rolls",
    "Vegan Pad Thai",
    "Vegan Chili",
    "Vegan Shepherd’s Pie",
    "Vegan Burrito Bowl",
    "Vegan Lasagna",
    "Vegan Enchiladas",
    "Vegan Moussaka",
    "Vegan Paella",
    "Vegan Ratatouille",
    "Vegan Gumbo",
    "Vegan Jambalaya",
    "Vegan Tom Yum Soup",
    "Vegan Laksa",
    "Vegan Borscht",
    "Vegan Tabbouleh",
    "Vegan Couscous Salad",
    "Vegan Poke Bowl",
    "Vegan Ramen",
    "Vegan Goulash"
  ],
  highProtein: [
    "Grilled Salmon Teriyaki",
    "Turkey & Quinoa Stuffed Peppers",
    "Beef Bulgogi Bowl",
    "Greek Chicken Souvlaki",
    "Tuna Poke Bowl",
    "Peruvian Lomo Saltado",
    "Moroccan Lamb Tagine",
    "Vietnamese Pho Bo",
    "Brazilian Feijoada",
    "Filipino Adobo Chicken",
    "South African Bobotie",
    "Argentinian Asado",
    "Korean BBQ Short Ribs",
    "Jamaican Jerk Chicken",
    "Lebanese Chicken Shawarma",
    "Indian Butter Chicken",
    "Thai Beef Salad",
    "Chinese Honey Walnut Shrimp",
    "Spanish Garlic Shrimp",
    "Australian Grass-fed Steak",
    "Egg White Omelette with Spinach",
    "Grilled Tofu with Peanut Sauce",
    "Baked Cod with Herbs",
    "Chicken Fajita Bowl",
    "Seared Tuna Nicoise",
    "Pork Tenderloin with Apples",
    "Lamb Kebabs",
    "Shrimp Stir Fry",
    "Buffalo Chicken Salad",
    "Turkey Meatballs with Zoodles",
    "Cottage Cheese & Berries",
    "Protein Pancakes",
    "Chia Seed Pudding",
    "Edamame & Quinoa Salad",
    "Lentil & Egg Stew",
    "Seared Duck Breast",
    "Venison Chili",
    "Rabbit Stew",
    "Halibut with Mango Salsa",
    "Crab Cakes",
    "Octopus Salad"
  ],
  lowCalorie: [
    "Zucchini Noodles Primavera",
    "Shrimp Ceviche",
    "Cauliflower Fried Rice",
    "Turkish Shepherd's Salad",
    "Vietnamese Goi Cuon",
    "Japanese Hiyayakko",
    "Spanish Gazpacho",
    "Lebanese Fattoush",
    "Mexican Ceviche de Camaron",
    "Greek Spanakorizo",
    "Thai Larb Gai",
    "Italian Caprese Stuffed Avocados",
    "Chinese Steamed Fish",
    "Vietnamese Bun Cha",
    "Korean Japchae",
    "Mediterranean Grilled Octopus",
    "Peruvian Tiradito",
    "Moroccan Zaalouk",
    "Turkish Yogurt Soup",
    "Filipino Kinilaw",
    "Grilled Eggplant Salad",
    "Roasted Beet & Citrus Salad",
    "Miso Soup",
    "Tomato Basil Soup",
    "Cucumber Dill Salad",
    "Carrot Ginger Soup",
    "Broccoli Slaw",
    "Spicy Mango Salad",
    "Papaya Salad",
    "Watermelon Feta Salad",
    "Apple Walnut Salad",
    "Roasted Cauliflower Tacos",
    "Baked Sweet Potato Fries",
    "Steamed Asparagus",
    "Grilled Portobello Mushrooms",
    "Sautéed Spinach with Garlic",
    "Roasted Brussels Sprouts",
    "Baked Zucchini Chips",
    "Cabbage Stir Fry",
    "Egg Drop Soup",
    "Pumpkin Soup"
  ],
  balanced: [
    "Mediterranean Grain Bowl",
    "Balinese Nasi Campur",
    "Turkish Menemen",
    "Korean Bibimbap",
    "Egyptian Koshari",
    "Filipino Sinigang",
    "Hungarian Goulash",
    "Persian Fesenjan",
    "Ukrainian Borscht",
    "Colombian Sancocho",
    "Nepalese Dal Bhat",
    "Tibetan Thukpa",
    "Thai Massaman Curry",
    "Vietnamese Banh Xeo",
    "Malaysian Nasi Lemak",
    "Singaporean Hainanese Chicken Rice",
    "Burmese Tea Leaf Salad",
    "Laos Larb",
    "Cambodian Fish Amok",
    "Mongolian Buuz",
    "Moroccan Chicken Tagine",
    "French Ratatouille",
    "Spanish Paella",
    "Italian Minestrone",
    "German Sauerbraten",
    "Polish Bigos",
    "Russian Shchi",
    "Austrian Goulash",
    "Swiss Rösti",
    "Belgian Waterzooi",
    "Dutch Stamppot",
    "Swedish Salmon Soup",
    "Norwegian Fiskesuppe",
    "Finnish Lohikeitto",
    "Danish Frikadeller",
    "Icelandic Plokkfiskur",
    "Irish Stew",
    "Scottish Cullen Skink",
    "Welsh Cawl",
    "English Shepherd’s Pie",
    "Portuguese Caldo Verde"
  ],
  cultural: [
    "Japanese Okonomiyaki",
    "Senegalese Thieboudienne",
    "Polish Pierogi",
    "Malaysian Laksa",
    "Omani Shuwa",
    "Guatemalan Pepian",
    "Armenian Dolma",
    "Finnish Lohikeitto",
    "Portuguese Bacalhau",
    "Cuban Ropa Vieja",
    "Iraqi Masgouf",
    "Australian Wattleseed Barramundi",
    "Russian Borscht",
    "Egyptian Koshari",
    "Iranian Fesenjan",
    "Pakistani Biryani",
    "Bangladeshi Hilsa Curry",
    "Sri Lankan Crab Curry",
    "Nepalese Momos",
    "Tibetan Thukpa",
    "Brazilian Moqueca",
    "Chilean Pastel de Choclo",
    "Argentinian Empanadas",
    "Peruvian Ceviche",
    "Venezuelan Arepas",
    "Mexican Mole",
    "Costa Rican Gallo Pinto",
    "Jamaican Ackee & Saltfish",
    "Haitian Griot",
    "Dominican Mangu",
    "Cuban Picadillo",
    "Puerto Rican Mofongo",
    "Trinidadian Doubles",
    "Barbadian Cou Cou",
    "Bahamian Conch Salad",
    "Ghanaian Jollof Rice",
    "Nigerian Egusi Soup",
    "Ethiopian Doro Wat",
    "Kenyan Nyama Choma",
    "South African Bunny Chow",
    "Moroccan Harira"
  ]
};

// 7-day workout plan (muscle building, weight loss, all body parts)
const fullWorkoutPlan = [
  {
    day: "Monday",
    focus: "Full Body Strength",
    exercises: [
      "Barbell Squats 4x8",
      "Deadlifts 3x6",
      "Bench Press 4x8",
      "Pull-ups 3x8",
      "Plank 3x1min"
    ]
  },
  {
    day: "Tuesday",
    focus: "HIIT Cardio",
    exercises: [
      "Burpees 30sec",
      "Mountain Climbers 30sec",
      "Jump Squats 30sec",
      "Rest 15sec (Repeat 5 rounds)"
    ]
  },
  {
    day: "Wednesday",
    focus: "Upper Body & Core",
    exercises: [
      "Push-ups 4x12",
      "Dumbbell Rows 3x10",
      "Shoulder Press 3x10",
      "Russian Twists 3x20",
      "Bicycle Crunches 3x15"
    ]
  },
  {
    day: "Thursday",
    focus: "Lower Body Strength",
    exercises: [
      "Lunges 3x12",
      "Leg Press 4x10",
      "Romanian Deadlifts 3x8",
      "Calf Raises 3x15",
      "Glute Bridges 3x12"
    ]
  },
  {
    day: "Friday",
    focus: "Active Recovery",
    exercises: [
      "Yoga Flow 30min",
      "Foam Rolling 15min",
      "Dynamic Stretching 20min"
    ]
  },
  {
    day: "Saturday",
    focus: "Functional Training",
    exercises: [
      "Kettlebell Swings 3x15",
      "Battle Ropes 3x1min",
      "Box Jumps 3x10",
      "Medicine Ball Slams 3x12"
    ]
  },
  {
    day: "Sunday",
    focus: "Rest & Mobility",
    exercises: [
      "Yin Yoga 45min",
      "Mobility Drills 20min",
      "Breathing Exercises 10min"
    ]
  }
];

// Workout generator pools
const workoutPools = {
  strength: [
    "Push-ups: 3x12",
    "Pull-ups: 3x8",
    "Squats: 4x15",
    "Deadlifts: 3x10",
    "Bench Press: 4x8",
    "Russian Twists: 3x20",
    "Overhead Press: 3x10",
    "Bent-over Rows: 3x10",
    "Dumbbell Lunges: 3x12",
    "Tricep Dips: 3x15",
    "Bicep Curls: 3x12",
    "Leg Extensions: 3x15"
  ],
  hiit: [
    "Burpees: 1min",
    "Mountain Climbers: 1min",
    "Jump Squats: 1min",
    "Plank Jacks: 1min",
    "Skater Jumps: 1min",
    "Rest: 30sec",
    "High Knees: 1min",
    "Butt Kicks: 1min",
    "Jump Lunges: 1min"
  ],
  cardio: [
    "Running: 30min",
    "Cycling: 45min",
    "Rowing: 20min",
    "Jump Rope: 15min",
    "Stair Climbing: 20min",
    "Swimming: 30min",
    "Elliptical: 30min",
    "Power Walking: 40min"
  ],
  recovery: [
    "Yoga Flow: 30min",
    "Foam Rolling: 15min",
    "Dynamic Stretching: 20min",
    "Tai Chi: 25min",
    "Pilates: 30min",
    "Breathing Exercises: 10min",
    "Meditation: 15min",
    "Light Walking: 20min"
  ]
};

class ProgressTracker extends React.Component {
  state = {
    waterIntake: 0,
    dailyGoal: 3000, // ml
    workoutProgress: Array(7).fill(false),
    generatedWorkout: []
  };

  handleWaterChange = (amount) => {
    this.setState((prev) => ({
      waterIntake: Math.max(
        0,
        Math.min(prev.dailyGoal, prev.waterIntake + amount)
      )
    }));
  };

  toggleWorkoutDay = (index) => {
    this.setState((prev) => ({
      workoutProgress: prev.workoutProgress.map((val, i) =>
        i === index ? !val : val
      )
    }));
  };

  generateCustomWorkout = () => {
    // Randomly select 1-2 from each pool for a balanced routine
    const getRandom = (arr, n) =>
      arr.sort(() => 0.5 - Math.random()).slice(0, n);
    const routine = [
      ...getRandom(workoutPools.strength, 2),
      ...getRandom(workoutPools.hiit, 1),
      ...getRandom(workoutPools.cardio, 1),
      ...getRandom(workoutPools.recovery, 1)
    ];
    this.setState({ generatedWorkout: routine });
  };

  render() {
    const {
      waterIntake,
      dailyGoal,
      workoutProgress,
      generatedWorkout
    } = this.state;
    const progress = (waterIntake / dailyGoal) * 100;

    return (
      <div className="progress-tracker">
        <h2>Daily Progress</h2>

        <div className="checklist-item">
          <h3>Water Intake Tracker</h3>
          <div className="water-tracker">
            <div
              className="water-progress"
              style={{ width: `${progress}%` }}
            ></div>
            <span>
              {waterIntake}ml / {dailyGoal}ml
            </span>
          </div>
          <div className="water-controls">
            <button onClick={() => this.handleWaterChange(250)}>+250ml</button>
            <button onClick={() => this.handleWaterChange(500)}>+500ml</button>
            <button onClick={() => this.handleWaterChange(-250)}>-250ml</button>
          </div>
        </div>

        <div className="checklist-item">
          <h3>7-Day Workout Plan</h3>
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
                {day.exercises.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="checklist-item">
          <h3>Custom Workout Generator</h3>
          <button onClick={this.generateCustomWorkout}>
            Generate New Workout
          </button>
          {generatedWorkout.length > 0 && (
            <ul>
              {generatedWorkout.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

class MealGenerator extends React.Component {
  state = {
    meal: "Click to generate",
    selectedCategory: "balanced",
    generatedMeals: []
  };

  generateMeal = () => {
    const { selectedCategory } = this.state;
    const meals = mealCategories[selectedCategory];
    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    this.setState((prev) => ({
      meal: randomMeal,
      generatedMeals: [randomMeal, ...prev.generatedMeals].slice(0, 5)
    }));
  };

  generateMultipleMeals = () => {
    const { selectedCategory } = this.state;
    const meals = mealCategories[selectedCategory];
    // Get 5 unique random meals
    const shuffled = meals.sort(() => 0.5 - Math.random());
    const randomMeals = shuffled.slice(0, 5);
    this.setState({ generatedMeals: randomMeals });
  };

  handleCategoryChange = (e) => {
    this.setState({ selectedCategory: e.target.value, generatedMeals: [] });
  };

  render() {
    return (
      <div className="meal-generator">
        <h2>Multi-Cultural Meal Generator</h2>

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
          <button onClick={this.generateMultipleMeals}>Generate 5 Meals</button>
        </div>

        <div className="checklist-item">
          <p>
            <strong>Latest Meal:</strong> {this.state.meal}
          </p>
          {this.state.generatedMeals.length > 0 && (
            <div>
              <strong>Recent Meals:</strong>
              <ul>
                {this.state.generatedMeals.map((meal, idx) => (
                  <li key={idx}>{meal}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div className="app-container">
      <h1>Global Fitness Pro App</h1>
      <ProgressTracker />
      <MealGenerator />
    </div>
  );
}

// For use with Babel (type="text/babel") or in a React project
ReactDOM.render(<App />, document.getElementById("root"));

