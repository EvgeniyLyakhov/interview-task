import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Layout } from "./layouts/app-layout/app-layout";
import { Home } from "./pages/home/home";
import { Profile } from "./pages/profile/profile";
import { Details } from "./pages/details/details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/list", element: <Profile /> },
      { path: "/single", element: <Details /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
