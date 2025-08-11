import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./components/Home.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import ProjectDetails from "./components/ProjectDetails.jsx";

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
        path: "about",
        Component: About,
      },
      {
        path: "resume",
        Component: Resume,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "projects",
        Component: Projects,
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
  </StrictMode>
);
