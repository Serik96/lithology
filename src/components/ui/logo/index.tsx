import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import s from "./logo.module.scss";

export const Logo = () => {
  const t = useTranslations();

  return (
    <Link href="/" className={s.logo}>
      <Image width={142} height={43} alt={t("litholog")} src="/img/logo.svg" />
    </Link>
  );
};
