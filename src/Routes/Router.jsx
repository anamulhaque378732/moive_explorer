import { createBrowserRouter } from "react-router";
import RootLoyout from "../Layouts/RootLoyout";
import Home from "../Pages/Home";

import AllMoive from "../Components/Moive/AllMoive";
import ErrorElement from "../Components/ErrorElement";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLoyout,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/movieCard",
        Component: AllMoive,
      },
    ],
  },
]);
