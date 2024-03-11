import { FunctionComponent, MouseEvent, ReactNode } from "react";
import cn from "classnames";

type Props = {
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit";
  disabled?: boolean;
  id?: string;
};

const Button: FunctionComponent<Props> = ({
  className,
  onClick,
  type,
  disabled,
  id,
  children,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(className)}
      id={id}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
