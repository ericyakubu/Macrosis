import { FunctionComponent, useState } from "react";
import { Container, Input, Toggle } from "../UI";
import classes from "./Userchars.module.scss";
import {
  // FieldValues,
  SubmitHandler,
  // UseFormRegister,
  useForm,
} from "react-hook-form";

// import * as yup from "yup";
// import { yupResolver } from "@hookform/resolvers/yup";

interface FormInputs {
  weight: number;
  height: number;
  age: number;
}

const Userchars: FunctionComponent = () => {
  const [weightKG, setWeightKG] = useState<boolean>(true);
  const [heightCM, setHeightCM] = useState<boolean>(true);
  // const validationSchema = yup.object().shape({
  //   weight: yup.number().required(),
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  // const onSubmit = () => {
  //   console.log("data");
  // };
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
  };
  return (
    <Container className={classes.container}>
      <h2 className={classes.container__title}>
        Some general information about you
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes.container__inputs}
      >
        <div className={classes.container__input}>
          <Input
            label="Weight"
            type="number"
            {...register("weight")}
            error={errors.weight}
          />
          <Toggle
            option1="kg"
            option2="lbs"
            firstOptionActive={weightKG}
            onClick={() => setWeightKG(!weightKG)}
          />
        </div>
        <div className={classes.container__input}>
          <Input
            label="Height"
            type="number"
            {...register("height")}
            error={errors.height}
          />
          <Toggle
            option1="cm"
            option2="ft"
            firstOptionActive={heightCM}
            onClick={() => setHeightCM(!heightCM)}
          />
        </div>
        <Input
          label="Age"
          type="number"
          {...register("age")}
          error={errors.age}
        />
        {/* <Input label="Disabled" type="number" disabled /> */}
      </form>
    </Container>
  );
};

export default Userchars;
