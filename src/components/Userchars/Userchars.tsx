import { FunctionComponent, useState } from "react";
import { Container, Input, Toggle } from "../UI";
import classes from "./Userchars.module.scss";

const Userchars: FunctionComponent = () => {
  const [weightKG, setWeightKG] = useState<boolean>(true);
  const [heightCM, setHeightCM] = useState<boolean>(true);
  return (
    <Container className={classes.container}>
      <h2 className={classes.container__title}>
        Some general information about you
      </h2>
      <div className={classes.container__inputs}>
        <div className={classes.container__input}>
          <Input label="Weight" type="number" />
          <Toggle
            option1="kg"
            option2="lbs"
            firstOptionActive={weightKG}
            onClick={() => setWeightKG(!weightKG)}
          />
        </div>
        <div className={classes.container__input}>
          <Input label="Height" type="number" />
          <Toggle
            option1="cm"
            option2="ft"
            firstOptionActive={heightCM}
            onClick={() => setHeightCM(!heightCM)}
          />
        </div>
        <Input label="Age" type="number" />
        <Input label="Disabled" type="number" disabled />
      </div>
    </Container>
  );
};

export default Userchars;
