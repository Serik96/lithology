import { usePathname } from "next/navigation";
import { HeaderDefault } from "@/components/header/header-default";
import { HeaderUnsigned } from "@/components/header/header-unsigned";
import { tempData } from "@/const/tmp-data";
import { isPrivatePage } from "@/helpers";
import s from "./header.module.scss";

const Header = () => {
  const pathname = usePathname();
  const isPrivate = isPrivatePage(pathname);

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        {isPrivate ? (
          <HeaderDefault notificationCount={tempData.notifications.count} />
        ) : (
          <HeaderUnsigned />
        )}
      </div>
    </header>
  );
};

export default Header;
