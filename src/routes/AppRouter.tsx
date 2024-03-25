import { Layout } from "@/components";
import { FunctionComponent, Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Loader } from "@/components/UI";
import {
  donateRoute,
  helpRoute,
  landingRoute,
  progressRoute,
  recipeRoute,
  recipesRoute,
  settingsRoute,
} from "./routnames";

const Recipes = lazy(() => import("@/pages/Recipes"));
const Recipe = lazy(() => import("@/pages/Recipe"));
const Progress = lazy(() => import("@/pages/Progress"));
const Landing = lazy(() => import("@/pages/Landing"));
const Settings = lazy(() => import("@/pages/Settings"));
const Help = lazy(() => import("@/pages/Help"));
const Donate = lazy(() => import("@/pages/Donate"));

const AppRouter: FunctionComponent = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route
          path={landingRoute}
          element={
            <Suspense fallback={<Loader />}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path={recipesRoute}
          element={
            <Suspense fallback={<Loader />}>
              <Recipes />
            </Suspense>
          }
        />
        <Route
          path={recipeRoute}
          element={
            <Suspense fallback={<Loader />}>
              <Recipe />
            </Suspense>
          }
        />
        <Route
          path={progressRoute}
          element={
            <Suspense fallback={<Loader />}>
              <Progress />
            </Suspense>
          }
        />
        <Route
          path={settingsRoute}
          element={
            <Suspense fallback={<Loader />}>
              <Settings />
            </Suspense>
          }
        />
        <Route
          path={helpRoute}
          element={
            <Suspense fallback={<Loader />}>
              <Help />
            </Suspense>
          }
        />
        <Route
          path={donateRoute}
          element={
            <Suspense fallback={<Loader />}>
              <Donate />
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
