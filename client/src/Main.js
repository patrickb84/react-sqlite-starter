import { Switch, Route } from "react-router-dom";
import { MainRoutes } from "./routes";
import { useAppContext } from "./contexts/AppContextProvider";
import Navbar from "./components/Navbar";

const Main = () => {
  const { onHomePage } = useAppContext();

  return (
    <>
      <Navbar />

      <main className={"mt-5 py-4"}>
        <Switch>
          {MainRoutes.map((route) => {
            return (
              <Route
                key={route.label}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </main>
    </>
  );
};

export default Main;
