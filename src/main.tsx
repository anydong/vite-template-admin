import { RouterProvider, createRouter } from "@tanstack/react-router";
import React from "react";
import ReactDOM from "react-dom/client";

import { notFoundRoute } from "@/components/NotFoundRoute";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({
  routeTree,
  notFoundRoute,
  defaultPreload: "intent",
  defaultComponent: () => import("@/components/Loading"),
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

import "@/config/dayjs.ts";
import "@/locale";

import "antd/dist/reset.css";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
