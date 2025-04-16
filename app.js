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
