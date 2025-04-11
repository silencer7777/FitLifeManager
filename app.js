import ProgressTracker from './components/ProgressTracker.js';
import MealGenerator from './components/MealGenerator.js';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  new ProgressTracker();
  new MealGenerator();
});
