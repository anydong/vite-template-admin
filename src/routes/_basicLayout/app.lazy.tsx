import { createLazyFileRoute } from "@tanstack/react-router";
import type { FC } from "react";

const Component: FC = () => {
  return null;
};
export const Route = createLazyFileRoute("/_basicLayout/app")({
  component: Component,
});
