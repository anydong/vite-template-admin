import type { RouteObject } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    children: [
      {
        index: true,
        lazy: () => import("@/routes/index.lazy.tsx"),
      },
    ],
  },
  {
    path: "/",
    lazy: () => import("@/layouts/BasicLayout"),
    children: [],
  },
  {
    path: "/",
    lazy: () => import("@/layouts/AuthLayout"),
    children: [
      {
        path: "login",
        lazy: () => import("@/routes/login/index.lazy.tsx"),
      },
    ],
  },
];

const router = createBrowserRouter(routes);
export default router;
