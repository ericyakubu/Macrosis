import { FunctionComponent, useState } from "react";
import { Container, Dropdown, Toggle } from "../UI";
import classes from "./Goal.module.scss";
import { oftenOptions, workoutType, workoutIntensity } from "./constants";
import cn from "classnames";

const Goal: FunctionComponent = () => {
  const [loseWeight, setLoseWeight] = useState<boolean>(true);
  const [workout, setWorkout] = useState<boolean>(true);

  //TODO add datepicker for goal (goal is optional, datepicker is required)
  //TODO adjust styling (for big screens)

  return (
    <Container className={classes.container}>
      <div className={classes.container__top}>
        <div className={classes.container__section}>
          <h3 className={classes.container__section__title}>
            What is your goal?
          </h3>
          <Toggle
            option1="Lose weight"
            option2="Gain muscle"
            firstOptionActive={loseWeight}
            onClick={() => setLoseWeight(!loseWeight)}
            className={classes.container__section__toggle}
          />
        </div>
        <div className={classes.container__section}>
          <h3 className={classes.container__section__title}>Do you workout?</h3>
          <Toggle
            option1="Yes"
            option2="No"
            firstOptionActive={workout}
            onClick={() => setWorkout(!workout)}
            className={classes.container__section__toggle}
          />
        </div>
      </div>

      {/* //TODO add smooth transition */}
      {workout && (
        <div
          className={cn(classes.container__workout, {
            [classes.container__workout_active]: workout,
          })}
        >
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>
              How often do you workout?
            </h3>
            <Dropdown options={oftenOptions} />
          </div>
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>
              What type of workout do you do?
            </h3>
            <Dropdown options={workoutType} />
          </div>
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>
              How intence is your workout?
            </h3>
            <Dropdown options={workoutIntensity} />
          </div>
        </div>
      )}
    </Container>
  );
};

export default Goal;
