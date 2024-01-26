import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const Component: FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex h-full items-center justify-center">
      <div>{t("common:Loading")}</div>
    </div>
  );
};
