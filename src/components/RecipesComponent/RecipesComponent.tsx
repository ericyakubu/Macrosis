import { FunctionComponent, useState } from "react";
import { Container } from "@/components/UI";
import classes from "./RecipesComponent.module.scss";
import RecipesSection from "./RecipesSection";
import { RecipeType } from "@/types";

const test: RecipeType[] = [
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

type ShowRecipesType = {
  recent: boolean;
  favorites: boolean;
  searchResults: boolean;
};

const RecipesComponent: FunctionComponent = () => {
  const [showRecipes, setShowRecipes] = useState<ShowRecipesType>({
    recent: false,
    favorites: false,
    searchResults: false,
  });
  const toggleRecipes = (name: keyof ShowRecipesType) => {
    setShowRecipes({ ...showRecipes, [name]: !showRecipes[name] });
  };

  // TODO add smooth transition to show/hide recipes
  return (
    <Container className={classes.recipes}>
      {/*TODO show recent and community favorites by default */}
      <RecipesSection
        onClick={() => toggleRecipes("recent")}
        recipes={test}
        show={showRecipes.recent}
        title={"Recent"}
      />
      <RecipesSection
        onClick={() => toggleRecipes("favorites")}
        recipes={test}
        show={showRecipes.favorites}
        title={"Community favorites"}
      />
      {/*TODO show search results when search/filter was set and hide above sections */}
      <RecipesSection
        onClick={() => toggleRecipes("searchResults")}
        recipes={test}
        show={showRecipes.searchResults}
        title={"Search results"}
      />
    </Container>
  );
};

export default RecipesComponent;
