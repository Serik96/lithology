import { FC } from "react";

export type TNavLink = {
  label: Nullable<string>;
  href: string;
  icon: Nullable<FC>;
  isActive?: boolean;
};
