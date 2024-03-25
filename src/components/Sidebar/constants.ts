import {
  community,
  donate,
  faq,
  help,
  macros,
  recipes,
  settings,
} from "@/routes/routnames";
import { IconNames } from "../UI/Icon/icon.d";
import { progress } from "@/pages/Progress/Progress.module.scss";

type LinksType = {
  link: string;
  icon: IconNames;
  name: string;
};

export const LinksTop: LinksType[] = [
  {
    link: macros,
    icon: "chart-pie",
    name: "Macros",
  },
  {
    link: progress,
    icon: "graph",
    name: "Progress",
  },
  {
    link: recipes,
    icon: "apple",
    name: "Recipes",
  },
];

export const LinksBottom: LinksType[] = [
  {
    link: settings,
    icon: "settings",
    name: "Settings",
  },
  {
    link: community,
    icon: "community",
    name: "Community",
  },
  {
    link: donate,
    icon: "donate",
    name: "Donate",
  },
  {
    link: help,
    icon: "help",
    name: "Help",
  },
  {
    link: faq,
    icon: "faq",
    name: "FAQ",
  },
];
