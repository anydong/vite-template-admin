import { NotFoundRoute } from "@tanstack/react-router";
import type { FC } from "react";
import { Route as rootRoute } from "../../routes/__root.tsx";

const Component: FC = () => {
  return "404 Not Found";
};
export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: Component,
});
