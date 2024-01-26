import type { ProLayoutProps, ProSettings } from "@ant-design/pro-components";
import { ProConfigProvider, ProLayout } from "@ant-design/pro-components";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ConfigProvider } from "antd";
import zhCn from "antd/locale/zh_CN";
import type { FC } from "react";

const Component: FC = () => {
  const proSettings: ProSettings = {
    layout: "top",
    fixedHeader: true,
    suppressSiderWhenMenuEmpty: true,
  };
  const proLayoutProps: ProLayoutProps = {
    title: "Admin Panel",
    token: {},
    onPageChange: (location) => {
      console.log(location);
    },
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

export const Route = createFileRoute("/_authLayout")({
  component: Component,
});
