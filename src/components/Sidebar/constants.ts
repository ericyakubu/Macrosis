import {
  communityRoute,
  donateRoute,
  faqRoute,
  helpRoute,
  macrosRoute,
  progressRoute,
  recipesRoute,
  settingsRoute,
} from "@/routes/routnames";
import { IconNames } from "../UI/Icon/icon.d";

type LinksType = {
  link: string;
  icon: IconNames;
  name: string;
};

export const LinksTop: LinksType[] = [
  {
    link: macrosRoute,
    icon: "chart-pie",
    name: "Macros",
  },
  {
    link: progressRoute,
    icon: "graph",
    name: "Progress",
  },
  {
    link: recipesRoute,
    icon: "apple",
    name: "Recipes",
  },
];

export const LinksBottom: LinksType[] = [
  {
    link: settingsRoute,
    icon: "settings",
    name: "Settings",
  },
  {
    link: communityRoute,
    icon: "community",
    name: "Community",
  },
  {
    link: donateRoute,
    icon: "donate",
    name: "Donate",
  },
  {
    link: helpRoute,
    icon: "help",
    name: "Help",
  },
  {
    link: faqRoute,
    icon: "faq",
    name: "FAQ",
  },
];
