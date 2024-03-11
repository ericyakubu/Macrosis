import { FunctionComponent } from "react";
import classes from "./Sidebar.module.scss";
import { Link } from "react-router-dom";
import { LinksBottom, LinksTop } from "./constants";
import { Icon, Navlink } from "../UI";

const Sidebar: FunctionComponent = () => {
  return (
    <section className={classes.sidebar}>
      <h1 className={classes.sidebar__title}>
        <Link to={"/"}>Macrosis</Link>
      </h1>
      <ul className={classes.section}>
        <li className={classes.section__user}>
          <Icon icon="user" size={32} /> Login | Register
        </li>
      </ul>
      <ul className={classes.section}>
        {LinksTop.map((link) => (
          <Navlink
            key={"navlink " + link.name}
            link={link.link}
            icon={link.icon}
            name={link.name}
          />
        ))}
      </ul>
      <ul className={classes.section}>
        {LinksBottom.map((link) => (
          <Navlink
            key={"navlink " + link.name}
            link={link.link}
            icon={link.icon}
            name={link.name}
          />
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
