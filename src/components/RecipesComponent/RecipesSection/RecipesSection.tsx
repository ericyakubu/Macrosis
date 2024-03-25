import { FunctionComponent, useRef, WheelEvent } from "react";
import cn from "classnames";
import classes from "./RecipesSection.module.scss";
import { Icon } from "@/components/UI";
import Recipe from "../Recipe";
import { RecipeType } from "../types";
type Props = {
  onClick: () => void;
  recipes: RecipeType[];
  show: boolean;
  title: string;
};

const RecipesSection: FunctionComponent<Props> = ({
  onClick,
  recipes,
  show,
  title,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // TODO fix scrolling
  const handleHorizontalScroll = (e: WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollLeft += e.deltaY;
    e.preventDefault();
  };
  return (
    <div
      className={cn(classes.section, {
        [classes.section__hidden]: !show,
      })}
    >
      <button
        className={cn(classes.section__title, {
          [classes.section__title__active]: show,
        })}
        onClick={onClick}
      >
        {title} <Icon icon="arrow-down" size={32} />
      </button>

      <div
        className={cn(classes.section__content, {
          [classes.section__content__active]: show,
        })}
        ref={scrollRef}
        onWheel={(e) => handleHorizontalScroll(e)}
      >
        {recipes.map((recipe) => (
          <Recipe key={recipe.name} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipesSection;
