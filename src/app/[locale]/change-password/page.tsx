"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button, TextField } from "@/components/ui";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { ArrowSquareRight } from "@/icons";
import s from "./change-password.module.scss";
import { navChangePassword } from "./const";

const ChangePassword = () => {
  const t = useTranslations();

  return (
    <>
      <Breadcrumbs navLinks={navChangePassword} />
      <div className={s.changePassword}>
        <form className={s.form}>
          <h1 className={s.heading}>{t("navigation.change-password")}</h1>
          <div className={s.formBody}>
            <div className={s.formFields}>
              <TextField
                type={"password"}
                label={t("auth.old-password")}
                placeholder={t("auth.old-password")}
              />
              <TextField
                type={"password"}
                label={t("auth.new-password")}
                placeholder={t("auth.new-password")}
              />
            </div>
            <Button>
              {t("navigation.change-password")}
              <ArrowSquareRight />
            </Button>
          </div>
        </form>
        <div className={s.sticker}>
          <Image
            className={s.stickerImg}
            width={326}
            height={326}
            alt={t("icons.sticker")}
            src="/img/stickers/man-sticker-1.gif"
          />

          <Image
            className={s.stickerLine}
            width={971}
            height={123}
            alt={t("icons.line")}
            src={"/img/stickers/sticker-line.svg"}
          />
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
