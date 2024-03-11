import { FunctionComponent, useState } from "react";
import classes from "./Dropdown.module.scss";
import cn from "classnames";
import Icon from "../Icon";

type Props = {
  options: string[];
};

const Dropdown: FunctionComponent<Props> = ({ options }) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Select");

  const handleSelect = (num: number) => {
    setSelected(options[num]);
    setShowOptions(false);
  };

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
        <span className={classes.dropdown__text}>{selected}</span>
        <Icon icon="arrow-down" size={32} />
      </button>
      <div
        className={cn([
          classes.dropdown__options,
          {
            [classes.dropdown__options__active]: showOptions,
          },
        ])}
      >
        {options.map((option, i) => (
          <button
            key={"dropdown option - " + option}
            className={cn([
              classes.dropdown__options__option,
              classes.dropdown__button,
            ])}
            onClick={() => handleSelect(i)}
          >
            <span className={classes.dropdown__text}>{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
