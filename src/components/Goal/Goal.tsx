import { FunctionComponent, useState } from "react";
import { Container, Datepicker, Dropdown, Toggle } from "../UI";
import classes from "./Goal.module.scss";
import {
  oftenOptions,
  workoutType,
  workoutIntensity,
  goalType,
} from "./constants";
import { SetOptionsFunction } from "../types";

type OptionsType = {
  goal: (typeof goalType)[number] | "";
  workingout: boolean;
  date: Date;
  periodicity: (typeof oftenOptions)[number] | "";
  workoutType: (typeof workoutType)[number] | "";
  intensity: (typeof workoutIntensity)[number] | "";
};

const Goal: FunctionComponent = () => {
  const [workout, setWorkout] = useState<boolean>(false);
  const [options, setOptions] = useState<OptionsType>({
    goal: "",
    workingout: false,
    date: new Date(),
    periodicity: "",
    workoutType: "",
    intensity: "",
  });

  const handleOpt: SetOptionsFunction = (option, value) => {
    if (option === "goal") {
      const check = options.goal === goalType[goalType.length - 1];
      if (!check) setWorkout(false);
    }
    setOptions({
      ...options,
      [option]: value,
    });
  };

  const handleDate = (date: Date) => {
    setOptions({
      ...options,
      date,
    });
  };

  //TODO add datepicker for goal (goal is optional, datepicker is required)
  //FIXME adjust styling (for big screens)
  return (
    <Container className={classes.container}>
      <div className={classes.container__section}>
        <h3 className={classes.container__section__title}>
          What is your goal?
        </h3>
        <Dropdown
          options={Array.from(goalType)}
          option={"goal"}
          setOptions={handleOpt}
        />
      </div>
      {options.goal === goalType[0] && (
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
            <h3 className={classes.container__section__title}>End date</h3>
            <Datepicker handleDate={handleDate} />
          </div>
        </>
      )}

      {/* TODO add smooth transition */}
      {workout && (
        <>
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>
              Periodicity your workout
            </h3>
            <Dropdown
              options={Array.from(oftenOptions)}
              option={"periodicity"}
              setOptions={handleOpt}
            />
          </div>
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>
              Your workout type
            </h3>
            <Dropdown
              options={Array.from(workoutType)}
              option={"workoutType"}
              setOptions={handleOpt}
            />
          </div>
          <div className={classes.container__section}>
            <h3 className={classes.container__section__title}>
              Intensity of your workout
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
