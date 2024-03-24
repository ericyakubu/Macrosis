const oftenOptions = ["Daily", "Weekly", "Monthly", "Never"] as const;
const workoutType = [
  "Strength training",
  "Bodybuilding",
  "Calisthenics",
  "Cardio",
] as const;
const workoutIntensity = ["Beginner", "Intermediate", "Advanced"] as const;
const goal = ["Lose weight", "Maintain", "Gain muscle mass"] as const;

export { oftenOptions, workoutType, workoutIntensity, goal };
