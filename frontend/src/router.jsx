import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Search from "./pages/SearchPage";
import Rankings from "./pages/Rankings";
import ErrorPage from "./pages/ErrorPage";
import WatchList from "./pages/WatchList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Search />,
      },
      {
        path: "watchlist/",
        element: <WatchList />,
      },
      {
        path: "rankings/",
        element: <Rankings />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
