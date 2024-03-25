import { Layout } from "@/components";
import { FunctionComponent, Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Loader } from "@/components/UI";
import { landing, progress, recipe, recipes } from "./routnames";

const Recipes = lazy(() => import("@/pages/Recipes"));
const Recipe = lazy(() => import("@/pages/Recipe"));
const Progress = lazy(() => import("@/pages/Progress"));
const Landing = lazy(() => import("@/pages/Landing"));

const AppRouter: FunctionComponent = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route
          path={landing}
          element={
            <Suspense fallback={<Loader />}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path={recipes}
          element={
            <Suspense fallback={<Loader />}>
              <Recipes />
            </Suspense>
          }
        />
        <Route
          path={recipe}
          element={
            <Suspense fallback={<Loader />}>
              <Recipe />
            </Suspense>
          }
        />
        <Route
          path={progress}
          element={
            <Suspense fallback={<Loader />}>
              <Progress />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <Landing />
            </Suspense>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default AppRouter;
