import { FunctionComponent, HTMLInputTypeAttribute, useState } from "react";
import classes from "./Input.module.scss";
import cn from "classnames";

type InputProps = {
  label: string;
  disabled?: boolean;
  className?: string;
  type?: HTMLInputTypeAttribute;
};

const Input: FunctionComponent<InputProps> = ({
  label,
  disabled,
  className,
  type,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [val, setVal] = useState<string>("");

  //TODO try to make it more addaptive to options

  // TODO fucking number type doesn't work in firefox
  return (
    <label
      className={cn(
        className,
        classes.container,
        { [classes.container__disabled]: disabled },
        { [classes.container__active]: isFocused && !disabled }
      )}
      onFocus={() => setIsFocused(true)}
      onBlur={() => {
        if (val) return setIsFocused(true);
        setIsFocused(false);
      }}
    >
      <span className={classes.container__label}>{label}</span>
      <input
        className={classes.container__input}
        type={type}
        onChange={(e) => setVal(e.target.value)}
        disabled={disabled}
      />
    </label>
  );
};

export default Input;
