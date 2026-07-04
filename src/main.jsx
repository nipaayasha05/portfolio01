import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layout/MainLayout.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";
import Home from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "project-details/:id",
        Component: ProjectDetails,
        loader: () => fetch("/projects.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
