import { NotFoundRoute } from "@tanstack/react-router";
import type { FC } from "react";
import { Route as rootRoute } from "../../routes/__root.tsx";

const Component: FC = () => {
  return (
    <div className="flex h-dvh items-center justify-center">
      <span>404 Not Found</span>
    </div>
  );
};
export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: Component,
});
