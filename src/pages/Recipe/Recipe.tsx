import { FunctionComponent, useState } from "react";
import { Chip, Container, Page } from "@/components/UI";
import { ExtendedRecipe, ShowType } from "./type";
import Section from "./Section";
import classes from "./Recipe.module.scss";

const test: ExtendedRecipe = {
  name: "Test name 1",
  link: `first`,
  img: "https://placehold.co/400x400",
  description: "Test description",
  servings: 3,
  diet: "Vegeterian",
  favorite: false,
  ingredients: [
    { name: "Chicken breast", amount: "100g" },
    { name: "Carrots", amount: "100g" },
    { name: "Potatoes", amount: "100g" },
    { name: "Onions", amount: "100g" },
    { name: "Tomatoes", amount: "100g" },
    { name: "Cucumber", amount: "100g" },
    { name: "Cabbage", amount: "100g" },
    { name: "Broccoli", amount: "100g" },
  ],
  steps: [
    "Test step 1",
    "Test step 2",
    "Test step 3",
    "Test step 4",
    "Test step 5",
    "Test step 6",
    "Test step 7",
    "Test step 8",
  ],
  macros: [
    {
      name: "Calories",
      amount: "100",
    },
    {
      name: "Carbs",
      amount: "100",
    },
    {
      name: "Fat",
      amount: "100",
    },
    {
      name: "Protein",
      amount: "100",
    },
    {
      name: "Fiber",
      amount: "100",
    },
    {
      name: "Sugar",
      amount: "100",
    },
    {
      name: "Sodium",
      amount: "100",
    },
  ],
};

const Recipe: FunctionComponent = () => {
  const [show, setShow] = useState<ShowType>({
    macros: true,
    ingredients: false,
    steps: false,
  });

  const toggleRecipes = (name: keyof ShowType) => {
    setShow({ ...show, [name]: !show[name] });
  };

  return (
    <Page>
      <Container className={classes.recipe}>
        <div className={classes.recipe__top}>
          <img src={test.img} alt={test.name} className={classes.recipe__img} />
          <div className={classes.recipe__info}>
            <h1 className={classes.recipe__info__title}>{test.name}</h1>
            <p className={classes.recipe__info__description}>
              {test.description}
            </p>
            <div className={classes.recipe__info__chips}>
              {test.diet && (
                <Chip className={classes.recipe__info__chips__chip}>
                  {test.diet}
                </Chip>
              )}
              {test.servings && (
                <Chip className={classes.recipe__info__chips__chip}>
                  {test.servings} Servings
                </Chip>
              )}
            </div>
          </div>
        </div>
        <Section
          title="Macros"
          list={test.macros}
          onClick={() => toggleRecipes("macros")}
          show={show.macros}
        />
        <Section
          title="Ingredients"
          list={test.ingredients}
          onClick={() => toggleRecipes("ingredients")}
          show={show.ingredients}
        />
        <Section
          title="Steps"
          steps={test.steps}
          onClick={() => toggleRecipes("steps")}
          show={show.steps}
        />
        {/* XXX think about adding similar recipes section */}
      </Container>
    </Page>
  );
};

export default Recipe;
