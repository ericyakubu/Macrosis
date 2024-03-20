export type InitialStateType = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  photo: string;
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
    date: number;
  }[];
  startDate: number;
  goal: {
    type: "lose" | "maintain" | "gain";
    wight: {
      kg: number;
      lb: number;
    };
    date: number;
  };
  workout: {
    workingOut: boolean;
    howOften: number;
    type: "cardio" | "strength";
    intencivity: "low" | "medium" | "high";
  };
};
