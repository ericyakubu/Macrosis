import { FunctionComponent, MouseEvent } from "react";
import cn from "classnames";
import classes from "./Toggle.module.scss";

type Props = {
  className?: string;
  option1: string;
  option2: string;
  firstOptionActive: boolean;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
};

const Toggle: FunctionComponent<Props> = ({
  className,
  option1,
  option2,
  firstOptionActive,
  onClick,
}) => {
  return (
    <button
      className={cn(className, classes.toggle, {
        [classes.toggle__init]: !firstOptionActive,
      })}
      onClick={onClick}
    >
      <span
        className={cn(classes.toggle__option, {
          [classes.toggle__option__active]: firstOptionActive,
        })}
      >
        {option1}
      </span>
      <span className={classes.toggle__separator}>│</span>
      <span
        className={cn(classes.toggle__option, {
          [classes.toggle__option__active]: !firstOptionActive,
        })}
      >
        {option2}
      </span>
    </button>
  );
};

export default Toggle;
