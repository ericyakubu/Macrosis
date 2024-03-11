import { FunctionComponent, useState } from "react";
import classes from "./Dropdown.module.scss";
import cn from "classnames";

type Props = {
  options: string[];
};

const Dropdown: FunctionComponent<Props> = ({ options }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  //TODO add icon and try to make it more refined

  return (
    <div className={classes.dropdown}>
      <button
        className={cn([
          classes.dropdown__selected,
          classes.dropdown__button,
          {
            [classes.dropdown__button__active]: showOptions,
          },
        ])}
        onClick={() => setShowOptions(!showOptions)}
      >
        <span className={classes.dropdown__text}>Dropdown</span>
      </button>
      <div
        className={cn([
          classes.dropdown__options,
          {
            [classes.dropdown__options__active]: showOptions,
          },
        ])}
      >
        {options.map((option) => (
          <button
            key={"dropdown option - " + option}
            className={cn([
              classes.dropdown__options__option,
              classes.dropdown__button,
            ])}
          >
            <span className={classes.dropdown__text}>{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
