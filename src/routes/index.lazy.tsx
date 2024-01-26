import Iconify from "@/components/Iconify";
import { Button } from "antd";
import type { FC } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import reactLogo from "@/assets/react.svg";

import LocaleSelector from "@/components/LocaleSelector";
import { createLazyFileRoute } from "@tanstack/react-router";
import "./index.css";
import viteLogo from "/vite.svg";

const Component: FC = () => {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{t("title")}</h1>
      <div>
        <LocaleSelector />
      </div>
      <div className="p-8">
        <Button icon={<Iconify icon="ic:outline-exposure-plus-1" />} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
};

export const Route = createLazyFileRoute("/")({
  component: Component,
});
