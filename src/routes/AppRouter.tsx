import { Layout } from "@/components";
import { FunctionComponent, Suspense, lazy } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { Loader } from "@/components/UI";

const Diet = lazy(() => import("@/pages/Diet"));
const Progress = lazy(() => import("@/pages/Progress"));
const Landing = lazy(() => import("@/pages/Landing"));

const AppRouter: FunctionComponent = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Landing />
            </Suspense>
          }
        />
        <Route
          path="/diet"
          element={
            <Suspense fallback={<Loader />}>
              <Diet />
            </Suspense>
          }
        />
        <Route
          path="/progress"
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
