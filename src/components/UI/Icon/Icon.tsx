import IcomoonReact from "icomoon-react";
import {
  CSSProperties,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

import { IconNames } from "./icon.d";
import iconSet from "./pathToSelection/selection.json";

interface IconProps {
  icon: IconNames;
  size: string | number;
  color?: string;
  hoverColor?: string;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
}

const Icon: FunctionComponent<IconProps> = ({
  icon,
  size,
  color,
  hoverColor,
  className,
  style,
  onClick,
}) => {
  const [iconColor, setIconColor] = useState<string>(color || "");

  const handleMouseEnter = useCallback(() => {
    if (hoverColor) setIconColor(hoverColor);
  }, [hoverColor]);

  const handleMouseLeave = useCallback(() => {
    if (hoverColor) setIconColor(color || "");
  }, [hoverColor, color]);

  useEffect(() => {
    setIconColor(color || "");
  }, [color]);

  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={iconColor}
      size={size}
      icon={icon}
      style={style}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
};

export default Icon;
