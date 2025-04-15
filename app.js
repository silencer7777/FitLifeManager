// Add these CDNs in CodePen settings:
// https://unpkg.com/react@18/umd/react.development.js
// https://unpkg.com/react-dom@18/umd/react-dom.development.js

class ProgressTracker extends React.Component {
  render() {
    return (
      <div className="progress-tracker">
        <h2>Progress Tracker</h2>
        <div className="checklist-item">
          <p>Daily Water Intake</p>
          <button>Mark Complete</button>
        </div>
        <div className="checklist-item">
          <p>Morning Workout</p>
          <button>Mark Complete</button>
        </div>
      </div>
    );
  }
}

class MealGenerator extends React.Component {
  state = {
    meal: "Click to generate a meal plan"
  };

  generateMeal = () => {
    const meals = [
      "Grilled chicken with quinoa and steamed veggies",
      "Salmon with sweet potato and asparagus",
      "Vegan Buddha bowl with tahini dressing",
      "Turkey chili with mixed greens"
    ];
    this.setState({ meal: meals[Math.floor(Math.random() * meals.length)] });
  };

  render() {
    return (
      <div className="meal-generator">
        <h2>Meal Generator</h2>
        <button onClick={this.generateMeal}>Generate Meal</button>
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
      <h1>Fitness Pro App</h1>
      <ProgressTracker />
      <MealGenerator />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
