// --- Expanded & Themed Image Arrays ---
const workoutImages = [
  // Strength
  "https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Barbell squats
  "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Dumbbell
  "https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Push-ups
  // HIIT
  "https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // HIIT workout
  "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Mountain climbers
  // Cardio
  "https://images.pexels.com/photos/3757376/pexels-photo-3757376.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Running
  "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Cycling
  "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Rowing
  // Recovery
  "https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Yoga
  "https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"  // Stretching
];

const mealImages = [
  // Vegan
  "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Vegan salad
  "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Vegan bowl
  // High Protein
  "https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Grilled salmon
  "https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Protein meal
  // Low Calorie
  "https://images.pexels.com/photos/593839/pexels-photo-593839.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Zucchini noodles
  // Cultural
  "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Sushi
  // Balanced
  "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop", // Balanced bowl
  // Healthy meal
  "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" // Healthy meal
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
      "Kettlebell Swings 3x15", "Battle Ropes 3x1min"
    ]
  },
  {
    day: "Sunday",
    focus: "Rest & Mobility",
    exercises: [
      "Light Walk 30min", "Stretching 15min"
    ]
  }
];

const weeklyPlans = {
  full: fullWorkoutPlan,
  strength: [
    { day: "Monday", focus: "Strength", exercises: workoutPlans.strength },
    { day: "Tuesday", focus: "Strength", exercises: workoutPlans.strength },
    { day: "Wednesday", focus: "Strength", exercises: workoutPlans.strength },
    { day: "Thursday", focus: "Strength", exercises: workoutPlans.strength },
    { day: "Friday", focus: "Strength", exercises: workoutPlans.strength },
    { day: "Saturday", focus: "Strength", exercises: workoutPlans.strength },
    { day: "Sunday", focus: "Rest", exercises: ["Rest & Recovery"] }
  ],
  hiit: [
    { day: "Monday", focus: "HIIT", exercises: workoutPlans.hiit },
    { day: "Tuesday", focus: "HIIT", exercises: workoutPlans.hiit },
    { day: "Wednesday", focus: "HIIT", exercises: workoutPlans.hiit },
    { day: "Thursday", focus: "HIIT", exercises: workoutPlans.hiit },
    { day: "Friday", focus: "HIIT", exercises: workoutPlans.hiit },
    { day: "Saturday", focus: "HIIT", exercises: workoutPlans.hiit },
    { day: "Sunday", focus: "Rest", exercises: ["Rest & Recovery"] }
  ],
  cardio: [
    { day: "Monday", focus: "Cardio", exercises: workoutPlans.cardio },
    { day: "Tuesday", focus: "Cardio", exercises: workoutPlans.cardio },
    { day: "Wednesday", focus: "Cardio", exercises: workoutPlans.cardio },
    { day: "Thursday", focus: "Cardio", exercises: workoutPlans.cardio },
    { day: "Friday", focus: "Cardio", exercises: workoutPlans.cardio },
    { day: "Saturday", focus: "Cardio", exercises: workoutPlans.cardio },
    { day: "Sunday", focus: "Rest", exercises: ["Rest & Recovery"] }
  ],
  recovery: [
    { day: "Monday", focus: "Recovery", exercises: workoutPlans.recovery },
    { day: "Tuesday", focus: "Recovery", exercises: workoutPlans.recovery },
    { day: "Wednesday", focus: "Recovery", exercises: workoutPlans.recovery },
    { day: "Thursday", focus: "Recovery", exercises: workoutPlans.recovery },
    { day: "Friday", focus: "Recovery", exercises: workoutPlans.recovery },
    { day: "Saturday", focus: "Recovery", exercises: workoutPlans.recovery },
    { day: "Sunday", focus: "Rest", exercises: ["Rest & Mobility"] }
  ]
};

// --- Components ---

function SideColumn({ symbols, images }) {
  return (
    <div className="side-column">
      <div className="side-symbols">
        {symbols.map((symbol, i) => (
          <i key={i} className={`fas ${symbol}`}></i>
        ))}
      </div>
      <div className="side-images">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`img${i + 1}`} />
        ))}
      </div>
    </div>
  );
}

class ProgressTracker extends React.Component {
  state = {
    waterIntake: 0,
    dailyGoal: 3000,
    workoutProgress: Array(7).fill(false),
    selectedPlan: 'full'
  };

  handleWaterChange = (amount) => {
    this.setState(prev => ({
      waterIntake: Math.max(0, prev.waterIntake + amount)
    }));
  };

  toggleWorkoutDay = (idx) => {
    this.setState(prev => ({
      workoutProgress: prev.workoutProgress.map((v, i) => i === idx ? !v : v)
    }));
  };

  handlePlanChange = (e) => {
    this.setState({
      selectedPlan: e.target.value,
      workoutProgress: Array(7).fill(false)
    });
  };

  render() {
    const { waterIntake, dailyGoal, workoutProgress, selectedPlan } = this.state;
    const progress = (waterIntake / dailyGoal) * 100;
    const planData = weeklyPlans[selectedPlan];

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
          <div className="workout-plan-selector">
            <label>
              <i className="fas fa-dumbbell"></i> Weekly Workout Plan:&nbsp;
              <select value={selectedPlan} onChange={this.handlePlanChange}>
                <option value="full">Full Plan</option>
                <option value="strength">Strength</option>
                <option value="hiit">HIIT</option>
                <option value="cardio">Cardio</option>
                <option value="recovery">Recovery</option>
              </select>
            </label>
          </div>
          <h3><i className="fas fa-calendar-week"></i> 7-Day Workout</h3>
          {planData.map((day, idx) => (
            <div key={day.day} className="workout-day">
              <label>
                <input
                  type="checkbox"
                  checked={workoutProgress[idx]}
                  onChange={() => this.toggleWorkoutDay(idx)}
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
    <div className="app-container">
      <h1><i className="fas fa-heartbeat"></i> Global Fitness Pro App</h1>
      <div className="main-layout">
        <SideColumn symbols={leftSymbols} images={workoutImages} />
        <div className="main-content">
          <ProgressTracker />
          <MealGenerator />
        </div>
        <SideColumn symbols={rightSymbols} images={mealImages} />
      </div>
    </div>
  );
}

// --- Render App ---
ReactDOM.render(<App />, document.getElementById('root'));