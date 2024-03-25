import { FunctionComponent } from "react";
import { Container, Icon } from "@/components/UI";
import classes from "./RecipesComponent.module.scss";
import Recipe from "./Recipe";

type RecipeType = {
  name: string;
  link: string;
  img: string;
  description: string;
  servings: number;
  diet: string;
  favorite: boolean;
}[];

const test: RecipeType = [
  {
    name: "Test name 1",
    link: `first`,
    img: "https://placehold.co/400x400",
    description: "Test description",
    servings: 3,
    diet: "Vegeterian",
    favorite: false,
  },
  {
    name: "Test name 2",
    link: `second`,
    img: "https://placehold.co/400x400",
    description: "Test description",
    servings: 3,
    diet: "Vegeterian",
    favorite: true,
  },
  {
    name: "Test name 3",
    link: `third`,
    img: "https://placehold.co/400x400",
    description: "Test description",
    servings: 3,
    diet: "Vegeterian",
    favorite: false,
  },
  {
    name: "Test name 4",
    link: `fourth`,
    img: "https://placehold.co/400x400",
    description: "Test description",
    servings: 3,
    diet: "Vegeterian",
    favorite: true,
  },
  {
    name: "Test name 5",
    link: `fifth`,
    img: "https://placehold.co/400x400",
    description: "Test description",
    servings: 3,
    diet: "Vegeterian",
    favorite: false,
  },
  {
    name: "Test name 6",
    link: `sixth`,
    img: "https://placehold.co/400x400",
    description: "Test description",
    servings: 3,
    diet: "Vegeterian",
    favorite: true,
  },
];

const RecipesComponent: FunctionComponent = () => {
  return (
    <Container className={classes.recipes}>
      <div className={classes.recipes__section}>
        <button className={classes.recipes__section__title}>
          Recent <Icon icon="arrow-down" size={32} />
        </button>

        <div className={classes.recipes__section__content}>
          {test.map((recipe) => (
            <Recipe key={recipe.name} recipe={recipe} />
          ))}
        </div>
      </div>
      <div className={classes.recipes__section}>
        <button className={classes.recipes__section__title}>
          Community favorites <Icon icon="arrow-down" size={32} />
        </button>

        <div className={classes.recipes__section__content}>
          {test.map((recipe) => (
            <Recipe key={recipe.name} recipe={recipe} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecipesComponent;
