import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Login from "./pages/Login";
import Main from "./pages/Main";

const routes = createAppContainer(
  createSwitchNavigator({
    Login,
    Main
  })
);

export default routes;
