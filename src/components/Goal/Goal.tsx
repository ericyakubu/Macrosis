import { FunctionComponent, useEffect, useState } from "react";
import { Container, Dropdown, Toggle } from "../UI";
import classes from "./Goal.module.scss";
import { oftenOptions, workoutType, workoutIntensity, goal } from "./constants";
import { SetOptionsFunction } from "../types";

type GoalType = {
  goal: (typeof goal)[number] | "";
  workingout: boolean;
  date: string;
  periodicity: (typeof oftenOptions)[number] | "";
  workoutType: (typeof workoutType)[number] | "";
  intensity: (typeof workoutIntensity)[number] | "";
};

const Goal: FunctionComponent = () => {
  const [loseWeight, setLoseWeight] = useState<boolean>(true);
  const [workout, setWorkout] = useState<boolean>(true);

  const [options, setOptions] = useState<GoalType>({
    goal: "",
    workingout: false,
    date: "",
    periodicity: "",
    workoutType: "",
    intensity: "",
  });

  const toggleGoal = () => {
    if (loseWeight === true) setWorkout(false);
    setLoseWeight(!loseWeight);
  };

  const handleOpt: SetOptionsFunction = (option, value) => {
    setOptions({
      ...options,
      [option]: value,
    });
  };

  useEffect(() => {
    console.log(options);
  }, [options]);

  //TODO add datepicker for goal (goal is optional, datepicker is required)
  //TODO adjust styling (for big screens)

  return (
    <Container className={classes.container}>
      <div className={classes.container__section}>
        <h3 className={classes.container__section__title}>
          What is your goal?
        </h3>
        <Toggle
          option1="Lose weight"
          option2="Gain muscle"
          firstOptionActive={loseWeight}
          onClick={toggleGoal}
          className={classes.container__section__toggle}
        />
        <Dropdown
          options={Array.from(goal)}
          option={"goal"}
          setOptions={handleOpt}
        />
      </div>
      {loseWeight && (
        <>
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>
              Do you workout?
            </h3>
            <Toggle
              option1="Yes"
              option2="No"
              firstOptionActive={workout}
              onClick={() => setWorkout(!workout)}
              className={classes.container__section__toggle}
            />
          </div>
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>Datepicker</h3>
            <Toggle
              option1="Yes"
              option2="No"
              firstOptionActive={loseWeight}
              onClick={() => setWorkout(!workout)}
              className={classes.container__section__toggle}
            />
          </div>
        </>
      )}

      {/* //TODO add smooth transition */}
      {workout && (
        <>
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>
              How often do you workout?
            </h3>
            <Dropdown
              options={Array.from(oftenOptions)}
              option={"periodicity"}
              setOptions={handleOpt}
            />
          </div>
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>
              What type of workout do you do?
            </h3>
            <Dropdown
              options={Array.from(workoutType)}
              option={"workoutType"}
              setOptions={handleOpt}
            />
          </div>
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>
              How intence is your workout?
            </h3>
            <Dropdown
              options={Array.from(workoutIntensity)}
              option={"intensity"}
              setOptions={handleOpt}
            />
          </div>
        </>
      )}
    </Container>
  );
};

export default Goal;
