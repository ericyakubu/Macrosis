//! if any of these changes, change it in the Goal component as well

const oftenOptions = ["Daily", "Weekly", "Monthly", "Never"] as const;
const workoutType = [
  "Strength training",
  "Bodybuilding",
  "Calisthenics",
  "Cardio",
] as const;
const workoutIntensity = ["Beginner", "Intermediate", "Advanced"] as const;
const goalType = ["Lose weight", "Maintain", "Gain muscle mass"] as const;

//! if any of these changes, change it in the Goal component as well

export { oftenOptions, workoutType, workoutIntensity, goalType };
