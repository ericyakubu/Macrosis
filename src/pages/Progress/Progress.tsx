import { FunctionComponent } from "react";
import { Timeline } from "@/components";
import ProgressSatisfaction from "./ProgressSatisfaction";
import UpdateWeight from "./UpdateWeight";
import { Page } from "@/components/UI";

//TODO finish this page
const Progress: FunctionComponent = () => {
  return (
    <Page>
      <Timeline />
      <UpdateWeight />
      <ProgressSatisfaction />
    </Page>
  );
};

export default Progress;
