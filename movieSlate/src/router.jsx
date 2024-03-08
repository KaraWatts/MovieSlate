import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Search from "./pages/SearchPage";
import WatchList from "./pages/WatchList";
import ErrorPage from "./pages/ErrorPage";

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
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;
