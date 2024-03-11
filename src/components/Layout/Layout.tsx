import { FunctionComponent, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import classes from "./Layout.module.scss";

const Layout: FunctionComponent = () => {
  // const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
  }, [pathname]);

  useEffect(() => {
    const currentPathname = window.location.pathname;

    if (currentPathname !== pathname) {
      navigate(currentPathname);
    }
  }, [pathname, navigate]);

  return (
    <div className={classes.layout}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Layout;
