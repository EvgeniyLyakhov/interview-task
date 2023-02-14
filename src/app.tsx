import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layouts/app-layout/app-layout";
import { CardDetails } from "./pages/card-details/card-details";
import { Home } from "./pages/home/home";
import { Profile } from "./pages/profile/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile/:id", element: <Profile /> },
      { path: "/cards/:id", element: <CardDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
