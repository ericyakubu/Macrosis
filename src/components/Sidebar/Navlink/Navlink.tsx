import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navlink.module.scss";
import { IconNames } from "@/components/UI/Icon/icon.d";
import { Icon } from "@/components/UI";

type Props = {
  link: string;
  icon?: IconNames;
  name: string;
};

const Navlink: FunctionComponent<Props> = ({ link, icon, name }) => {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive, isPending }) =>
          isPending
            ? `${classes.nav__link}`
            : isActive
              ? `${classes.nav__link} ${classes.nav__link__active}`
              : `${classes.nav__link}`
        }
      >
        {icon && <Icon icon={icon} size={32} />} {name}
      </NavLink>
    </li>
  );
};

export default Navlink;
