import type { ProLayoutProps, ProSettings } from "@ant-design/pro-components";
import { ProConfigProvider, ProLayout } from "@ant-design/pro-components";
import { Outlet, createLazyFileRoute } from "@tanstack/react-router";
import { ConfigProvider } from "antd";
import zhCn from "antd/locale/zh_CN";
import type { FC } from "react";

export const Component: FC = () => {
  const proSettings: ProSettings = {
    layout: "top",
    fixedHeader: true,
    suppressSiderWhenMenuEmpty: true,
  };
  const proLayoutProps: ProLayoutProps = {
    title: "Admin Panel",
  };
  return (
    <ProConfigProvider>
      <ConfigProvider locale={zhCn} theme={{ cssVar: true, hashed: false }}>
        <ProLayout {...proLayoutProps} {...proSettings}>
          <Outlet />
        </ProLayout>
      </ConfigProvider>
    </ProConfigProvider>
  );
};

export const Route = createLazyFileRoute("/_basicLayout")({
  component: Component,
});
