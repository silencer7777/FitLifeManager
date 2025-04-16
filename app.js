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
          <ProgressTracker />
          <MealGenerator />
        </div>
      );
    }

    ReactDOM.render(<App />, document.getElementById('root'));
  </script>
</body>
</html>
