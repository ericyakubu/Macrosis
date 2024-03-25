import { FunctionComponent } from "react";
import classes from "./Recipe.module.scss";
import { Link } from "react-router-dom";
import { Chip, Icon } from "@/components/UI";
import { recipesRoute } from "@/routes/routnames";
import { RecipeType } from "@/types";

type Props = {
  recipe: RecipeType;
};

const Recipe: FunctionComponent<Props> = ({ recipe }) => {
  return (
    <>
      {!!recipe.link && (
        <div className={classes.container}>
          <Link
            to={`${recipesRoute}/${recipe.link}`}
            className={classes.recipe}
          >
            <img
              src={recipe.img}
              alt={recipe.name}
              className={classes.recipe__img}
            />
            <h2 className={classes.recipe__title}>{recipe.name}</h2>
            <p className={classes.recipe__description}>{recipe.description}</p>
            <div className={classes.recipe__chips}>
              {recipe.diet && <Chip>{recipe.diet}</Chip>}
              {recipe.servings && <Chip>{recipe.servings} Servings</Chip>}
            </div>
          </Link>
          <button className={classes.favorite}>
            <Icon
              icon={recipe.favorite ? "heart-filled" : "heart-empty"}
              size={24}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Recipe;
