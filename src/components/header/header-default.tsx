import Link from "next/link";
import { Logo } from "@/components/ui";
import { routes } from "@/const/routes";
import { NotificationIcon } from "@/icons";
import s from "./header.module.scss";
import { Navigation } from "./navigation";

type TProps = {
  notificationCount: number;
};

export const HeaderDefault = ({ notificationCount }: TProps) => {
  return (
    <>
      <Logo />
      <Link className={s.notification} href={routes.project.notifications}>
        <NotificationIcon />
        <div className={s.notificationCount}>{notificationCount}</div>
      </Link>
      <Navigation />
    </>
  );
};
