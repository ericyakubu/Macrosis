export type InitialStateType = {
  name: string | null;
  email: string | null;
  photo: string | null;
  age: number;
  weight: {
    kg: number;
    lb: number;
  };
  height: {
    cm: number;
    ft: number;
  };
  progress: {
    weight: {
      kg: number;
      lb: number;
    };
    date: Date;
  }[];
  startDate: Date;
  goal: {
    type: "lose" | "maintain" | "gain";
    wight: {
      kg: number;
      lb: number;
    };
    date: Date;
  };
  workout: {
    workingOut: boolean;
    howOften: number;
    type: "cardio" | "strength";
    intencivity: "low" | "medium" | "high";
  };
};
