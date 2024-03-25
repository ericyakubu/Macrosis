import { FunctionComponent, useState } from "react";
import { Button, Container, Dropdown, Icon, Input } from "@/components/UI";
import { SetOptionsFunction } from "@/components/types";
import { foodType, dietType } from "./constants";
import classes from "./FoodFilter.module.scss";
import cn from "classnames";

type FoodFilterType = {
  foodType: string;
  dietType: string;
};

const FoodFilter: FunctionComponent = () => {
  const [options, setOptions] = useState<FoodFilterType>({
    foodType: "",
    dietType: "",
  });

  const [expand, setExpand] = useState(false);

  const handleOpt: SetOptionsFunction = (option, value) => {
    setOptions({
      ...options,
      [option]: value,
    });
  };

  const handleSearch = () => {};
  const expandSearch = () => setExpand(!expand);

  // FIXME adaptation needed
  return (
    <Container className={classes.filter}>
      <div className={classes.filter__main}>
        <Input
          label="Search for your food"
          className={classes.filter__search}
        />
        <Button className={classes.filter__btns} onClick={handleSearch}>
          <Icon icon="search" size={24} />
        </Button>
        <Button className={classes.filter__btns} onClick={expandSearch}>
          <Icon icon="options" size={24} />
          {/* <Icon icon="ellipsis-vertical" size={24} /> */}
        </Button>
      </div>
      {/* TODO add animation */}
      <div
        className={cn([
          classes.filter__categories,
          {
            [classes.filter__categories__expanded]: expand,
          },
        ])}
      >
        <Dropdown
          options={Array.from(foodType)}
          option="foodType"
          setOptions={handleOpt}
          clasNames={cn([classes.filter__category])}
        />
        <Dropdown
          options={Array.from(dietType)}
          option="dietType"
          setOptions={handleOpt}
          clasNames={cn([classes.filter__category])}
        />
        <Button className={classes.filter__btns} onClick={expandSearch}>
          <Icon icon="sort-a-z" size={24} />
        </Button>
        <Button className={classes.filter__btns} onClick={expandSearch}>
          <Icon icon="sort-z-a" size={24} />
        </Button>
        <Button className={classes.filter__btns} onClick={expandSearch}>
          <Icon icon="heart-filled" size={24} />
        </Button>
      </div>
    </Container>
  );
};

export default FoodFilter;
