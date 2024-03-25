import { RecipeType } from "@/types";

export type ShowType = {
  macros: boolean;
  ingredients: boolean;
  steps: boolean;
};

export interface ExtendedRecipe extends RecipeType {
  ingredients: {
    name: string;
    amount: string;
  }[];
  steps: string[];
  macros: {
    name: string;
    amount: string;
  }[];
}
