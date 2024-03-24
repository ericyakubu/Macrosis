import { FunctionComponent, useState } from "react";
import { Container, Dropdown } from "@/components/UI";
import { SetOptionsFunction } from "@/components/types";
import { foodtype } from "./constants";

type FoodFilter = {
  foodtype: string;
  diet: string;
};

const FoodFilter: FunctionComponent = () => {
  const [options, setOptions] = useState<FoodFilter>({
    foodtype: "",
    diet: "",
  });

  const handleOpt: SetOptionsFunction = (option, value) => {
    setOptions({
      ...options,
      [option]: value,
    });
  };
  return (
    <Container>
      <Dropdown
        options={Array.from(foodtype)}
        option="foodtype"
        setOptions={handleOpt}
      />
    </Container>
  );
};

export default FoodFilter;
