import { Container, Input, Toggle } from "@/components/UI";
import { FunctionComponent, useState } from "react";
import classes from "./UpdateWeight.module.scss";

const UpdateWeight: FunctionComponent = () => {
  const [measure, setMeasure] = useState<boolean>(true);
  // TODO implement functionality
  return (
    <Container className={classes.inputs}>
      <h2 className={classes.previous}>
        <span className={classes.previous__text}>Previous weight: </span> 121
        <span className={classes.previous__measure}>kg</span>
      </h2>
      <Toggle
        option1="kg"
        option2="lbs"
        firstOptionActive={measure}
        onClick={() => setMeasure(!measure)}
      />
      <Input className={classes.inputs__input} label="Current" type="number" />
    </Container>
  );
};

export default UpdateWeight;
