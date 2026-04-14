import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";

import Home from "../pages/home/Home";
import Timeline from "../pages/timeline/Timeline";
import Stats from "../pages/stats/Stats";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import NotFound from "../pages/notFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/friends.json"), // 🔥 important
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      {
        path: "/stats",
        element: <Stats />,
      },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
        loader: () => fetch("/friends.json"),
      },
    ],
  },
]);