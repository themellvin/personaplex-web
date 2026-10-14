import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Queue } from "./pages/Queue/Queue";

// Derive the router basename from Vite's configured base so client-side
// routing works when the app is served under a subpath (GitHub Pages).
const basename = import.meta.env.BASE_URL !== '/' ? import.meta.env.BASE_URL : undefined;

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Queue />,
    },
  ],
  { basename },
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <RouterProvider router={router}/>
);
