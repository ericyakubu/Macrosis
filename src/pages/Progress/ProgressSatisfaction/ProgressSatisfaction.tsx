import { FunctionComponent } from "react";
import classes from "./ProgressSatisfaction.module.scss";
import cn from "classnames";
import { Container, Icon } from "@/components/UI";

const ProgressSatisfaction: FunctionComponent = () => {
  const success = true;
  const failure = false;
  const warning = false;

  return (
    <Container
      className={cn(classes.results, {
        [classes.results__success]: success,
        [classes.results__failure]: failure,
        [classes.results__warning]: warning,
      })}
    >
      <Icon
        icon={
          success
            ? "face-satisfied-filled"
            : failure
              ? "face-frown"
              : "face-neutral-filled"
        }
        size={256}
        className={classes.results__icon}
      />
      {/* FIXME fix text for failure and warning */}
      {success && (
        <>
          <h3 className={classes.results__text__title}>You are on track!</h3>
          <h4 className={classes.results__text__subtitle}>Keep it up!</h4>
        </>
      )}
      {failure && (
        <>
          <h3 className={classes.results__text__title}>Failure</h3>
          <h4 className={classes.results__text__subtitle}>Keep it up!</h4>
        </>
      )}
      {warning && (
        <>
          <h3 className={classes.results__text__title}>Warning</h3>
          <h4 className={classes.results__text__subtitle}>Keep it up!</h4>
        </>
      )}
    </Container>
  );
};

export default ProgressSatisfaction;
