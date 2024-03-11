import { Layout } from "@/components";
import { Landing } from "@/pages";
import { FunctionComponent } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const AppRouter: FunctionComponent = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<Landing />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
