import { createRootRoute, Outlet } from "@tanstack/react-router";
import type { FC } from "react";

const Component: FC = () => {
  return <Outlet />;
};

export const Route = createRootRoute({
  component: Component,
});
