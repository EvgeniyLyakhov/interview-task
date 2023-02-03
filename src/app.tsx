import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Layout } from "./layouts/app-layout/app-layout";
import { Home } from "./pages/home/home";
import { List } from "./pages/list/list";
import { Single } from "./pages/single/single";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/list", element: <List /> },
      { path: "/single", element: <Single /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
